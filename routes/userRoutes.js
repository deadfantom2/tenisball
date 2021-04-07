const express = require('express');
const { checkAuth } = require('../middlewares/check-auth');
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../models/User');
const Post = require('../models/Post');

const router = express.Router();

/** ------------------------GET ALL USERS------------------------------ */
router.get('/', async (req, res) => {
  try {
    const getAllUsers = await User.find();
    return res.status(200).json({ users: getAllUsers });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

/** ------------------------GET USER BY ID------------------------------ */
router.get('/profile-info', checkAuth, async (req, res) => {
  try {
    const getUserById = await User.findById({ _id: req.user.id }).select(
      'name surname age isCanPost isCanWrite isReported favorites'
    );
    return res.status(200).json({ user: getUserById });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

/** ------------------------PUT CHANGE DATA USER------------------------------ */
router.put('/edit-profile', checkAuth, async (req, res) => {
  try {
    const body = {
      name: req.body.name,
      surname: req.body.surname,
      age: req.body.age,
    };
    await User.findOneAndUpdate({ _id: req.user.id }, body);
    return res.status(200).json({ message: 'Your Profile modified!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

/** ------------------------PUT CHANGE PASSWORD------------------------------ */
router.put('/edit-password', checkAuth, async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const body = { password: password };
    await User.findOneAndUpdate({ _id: req.user.id }, body);
    return res.status(200).json({ message: 'Your password modified!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

/** ------------------------DELETE YOURSELF USER------------------------------ */
router.delete('/delete-profile', checkAuth, async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.user.id });
    return res.status(200).json({ message: 'Your account deleted!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

/** ------------------------ADD A POST IN FAVORITE------------------------------ */
router.post('/add-favorite', checkAuth, async (req, res) => {
  const { postId, title, folderPhoto, photo, link } = req.body;
  const { id: _userId } = req.user;
  try {
    new Promise(async (resolve, reject) => {
      const newFavoritePost = await User.updateOne(
        {
          _id: _userId,
          'favorites.photo': { $ne: photo },
        },
        {
          $push: {
            favorites: {
              title: title,
              folderPhoto: folderPhoto,
              link: link,
              photo: photo,
              postId: postId,
              userId: _userId,
            },
          },
        }
      );
      return newFavoritePost ? resolve(newFavoritePost) : reject('Error');
    }).then(async () => {
      await Post.updateOne(
        {
          _id: postId,
        },
        {
          $push: {
            favorites: {
              user: _userId,
            },
          },
        }
      );
      return res
        .status(200)
        .json({ message: 'You have added a post to your favorites!' });
    });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

router.put('/delete-favorite', checkAuth, async (req, res) => {
  const { id: _userId } = req.user;
  const { favoriteId, postId } = req.body;

  try {
    new Promise(async (resolve, reject) => {
      const newFavoriteUser = await User.updateOne(
        { _id: _userId },
        {
          $pull: { favorites: { _id: favoriteId } },
        }
      );
      return newFavoriteUser ? resolve(newFavoriteUser) : reject('Error');
    }).then(async () => {
      await Post.updateOne(
        { _id: postId },
        {
          $pull: { favorites: { user: _userId } },
        }
      );
      return res
        .status(200)
        .json({ message: 'Post in your favorite deleted!' });
    });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

module.exports = router;
