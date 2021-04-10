const express = require('express');
const { checkAuth, checkAdmin } = require('../middlewares/check-auth');
const {
  checkCommentPemisison,
  checkYourCommentPemisison,
} = require('../middlewares/check-permissions');
require('dotenv').config();
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
// const Photo = require('../models/Photo');

const router = express.Router();

/** ------------------------GET------------------------------ */
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate('user', 'name')
      .populate('comments.comment')
      .populate('photos.photo')
      .sort({ createdAt: -1 })
      .select('_id title certificate likes totalLikes comments favorites');
    return res.status(200).json({ posts: posts });
  } catch (error) {
    console.log('error: ', error);
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

router.get('/:id', checkAuth, async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id })
      .populate('user', 'name avatar')
      .populate('comments.comment')
      .populate('photos.photo');

    if (post === null) {
      return res.status(404).json({ message: 'Post not found!' });
    }
    return res.status(200).json({ post: post });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

/** ------------------------POST COMMENT ADD------------------------------ */
router.post('/add-post', checkAuth, checkAdmin, async (req, res) => {
  try {
    new Promise(async (resolve, reject) => {
      const { id, name, avatar } = req.user;
      const body = {
        user: id,
        name: name,
        userAvatar: avatar,
        title: req.body.title,
        bitkin: req.body.bitkin,
        petrov: req.body.petrov,
        certificate: req.body.certificate,
        description: req.body.description,
        link_video: req.body.link_video,
        createdAt: new Date(),
      };
      const newPost = await Post.create(body);
      return newPost ? resolve(newPost) : reject('Error');
    }).then(async (post) => {
      await User.updateOne(
        { _id: req.user.id },
        {
          $push: {
            posts: {
              _postId: post._id,
              post: req.body.post,
            },
          },
        }
      );
      return res.status(201).json({ message: 'Post created!', post: post });
    });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

router.post(
  '/add-comment',
  checkAuth,
  checkCommentPemisison,
  async (req, res) => {
    try {
      new Promise(async (resolve, reject) => {
        const { id, name, avatar } = req.user;
        const body = {
          user: id,
          post: req.body.post,
          name: name,
          userAvatar: avatar,
          comment: req.body.comment,
          createdAt: new Date(),
        };

        const post = await Post.findById({ _id: req.body.post });
        if (post === null) {
          return res.status(404).json({ message: 'Post not found!' });
        }

        const newComment = await Comment.create(body);
        return newComment ? resolve(newComment) : reject('Error');
      }).then(async (comment) => {
        await Post.updateOne(
          { _id: req.body.post },
          {
            $push: {
              comments: {
                comment: comment._id,
              },
            },
          }
        );
        return res
          .status(201)
          .json({ message: 'Comment created!', comment: comment });
      });
    } catch (error) {
      return res.status(500).json({ message: 'Something is wrong!' });
    }
  }
);

/** ------------------------POST COMMENT EDIT------------------------------ */
router.put('/edit-post/:id', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { id, name, avatar } = req.user;
    const body = {
      user: id,
      name: name,
      userAvatar: avatar,
      title: req.body.title,
      bitkin: req.body.bitkin,
      petrov: req.body.petrov,
      certificate: req.body.certificate,
      description: req.body.description,
      link_video: req.body.link_video,
      createdAt: new Date(),
    };
    await Post.findOneAndUpdate({ _id: req.params.id }, body);
    return res.status(200).json({ message: 'Post modified!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

router.put(
  '/edit-comment/:id',
  checkAuth,
  checkYourCommentPemisison,
  async (req, res) => {
    try {
      const body = {
        comment: req.body.comment,
      };
      await Comment.findOneAndUpdate({ _id: req.params.id }, body);
      return res.status(200).json({ message: 'Comment modified!' });
    } catch (error) {
      return res.status(500).json({ message: 'Something is wrong!' });
    }
  }
);

/** ------------------------POST COMMENT LIKE------------------------------ */
router.post('/like-post', checkAuth, async (req, res) => {
  try {
    const { _id } = req.body;
    const { id: _userId, name } = req.user;

    await Post.updateOne(
      {
        _id: _id,
        'likes.userId': { $ne: _userId },
        'likes.name': { $ne: name },
      },
      {
        $push: {
          likes: {
            userId: _userId,
            name: name,
          },
        },
        $inc: { totalLikes: 1 },
      }
    );

    return res.status(200).json({ message: 'You liked a post!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

router.post('/like-comment', checkAuth, async (req, res) => {
  try {
    const { _id } = req.body;
    const { id: _userId, name } = req.user;
    await Comment.updateOne(
      {
        _id: _id,
        'likes.userId': { $ne: _userId },
        'likes.name': { $ne: name },
      },
      {
        $push: {
          likes: {
            userId: _userId,
            name: name,
          },
        },

        $inc: { totalLikes: 1 },
      }
    );
    return res.status(201).json({ message: 'You liked a comment!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

/** ------------------------POST COMMENT DELETE ------------------------------ */
router.delete('/delete/:id', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { id: uId } = req.user;
    const deletePost = await Post.findOneAndDelete({ _id: id });
    await Comment.deleteMany({
      post: id,
    });
    if (deletePost !== null) {
      await User.updateOne(
        { _id: uId },
        {
          $pull: { posts: { _postId: deletePost._id } },
        }
      );
      return res
        .status(204)
        .json({ message: 'Post deleted!', post: deletePost._id });
    }
    return res.status(404).json({ message: 'Post does not exist!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

router.delete(
  '/comment/delete/:id',
  checkAuth,
  checkYourCommentPemisison,
  async (req, res) => {
    const { id } = req.params;
    try {
      const deleteComment = await Comment.findOneAndDelete({
        _id: id,
      });
      if (deleteComment !== null) {
        await Post.updateOne(
          { _id: deleteComment.post },
          {
            $pull: { comments: { comment: deleteComment._id } },
          }
        );
        return res
          .status(200)
          .json({ message: 'Comment deleted!', comment: deleteComment._id });
      }
      return res.status(404).json({ message: 'Comment not found!' });
    } catch (error) {
      return res.status(500).json({ message: 'Something is wrong!' });
    }
  }
);

/** ------------------------REPORT COMMENT / USER------------------------------ */
router.post('/report-comment', checkAuth, async (req, res) => {
  const { commentId, _id } = req.body;
  const { id: _userId, name } = req.user;
  try {
    new Promise(async (resolve, reject) => {
      const resportComment = await Comment.updateOne(
        {
          _id: commentId,
          'reports.userId': { $ne: _userId },
          'reports.name': { $ne: name },
        },
        {
          $push: {
            reports: {
              userId: _userId,
              name: name,
            },
          },
          $inc: { totalReports: 1 },
        }
      );
      return resportComment ? resolve(resportComment) : reject('Error');
    }).then(async () => {
      await User.updateOne(
        { _id: _id },
        {
          $inc: { totalReports: 1 },
        }
      );
      return res
        .status(201)
        .json({ message: 'We will consider your complaint!' });
    });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

module.exports = router;
