const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const Photo = require('../models/Photo');
const fs = require('fs');
const { checkAuth, checkAdmin } = require('../middlewares/check-auth');
const { countImg, renameImage, reverseId } = require('../outils/upload-module');
const fileUpload = require('express-fileupload');

const router = express.Router();

// Default options
router.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
  })
);

router.post('/:type', async (req, res) => {
  try {
    // Fail, if not files
    if (!req.files) {
      return res.status(404).json({ message: 'Select your file please!' });
    }

    const { type } = req.params;
    const { id } = req.user;
    const { postId } = req.body;
    const archiveImages = req.files.fileInput; // Initialize name for input = fileInput
    let newArchiveImages = [];
    const typeRoutes = ['post']; // Type of routes
    const extensionsImages = ['png', 'jpg', 'jpeg']; // Type's file extensions images
    let path = '';
    const pathFolders = `./uploads/${type}/photo/${reverseId(id)}`;
    const existPath = fs.existsSync(pathFolders);

    // Fail route, return this message
    if (typeRoutes.indexOf(type) < 0) {
      return res.status(404).json({ message: 'Fail route!' });
    }

    // Check if folder exist
    if (!existPath) {
      fs.mkdirSync(pathFolders, { recursive: true });
    }

    if (archiveImages.length > 0) {
      Object.values(archiveImages).map((img) => {
        if (extensionsImages.indexOf(img.mimetype.split('/')[1]) > 0) {
          return newArchiveImages.push(img);
        }
      });
    } else {
      newArchiveImages = [archiveImages];
    }

    newArchiveImages.map(async (img) => {
      path = pathFolders + '/' + renameImage(img);
      await img.mv(path);
      await downloadByType(type, postId, renameImage(img), id);
    });
    return res
      .status(201)
      .json({ message: `${countImg(newArchiveImages)} has beed uploaded!` });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

const downloadByType = async (typeRoute, postId, imgName, id) => {
  await Photo.findOne({ name: imgName });
  const newImg = await Photo.create({
    name: imgName,
    route: typeRoute,
    post: postId,
    user: id,
  });
  await Post.updateOne(
    { _id: postId },
    {
      $push: {
        photos: {
          photo: newImg._id,
        },
      },
    }
  );
  await User.updateOne(
    { _id: id },
    {
      $push: {
        photos: {
          photo: newImg._id,
        },
      },
    }
  );
};

router.put('/delete-img', checkAuth, checkAdmin, async (req, res) => {
  try {
    const { id } = req.user;
    const { idPhoto } = req.body;

    const deletePhoto = await Photo.findOneAndDelete({ _id: idPhoto });
    await Post.updateOne(
      { _id: deletePhoto.post },
      {
        $pull: { photos: { photo: deletePhoto._id } },
      }
    );
    await User.updateOne(
      { _id: deletePhoto.user },
      {
        $pull: { photos: { photo: deletePhoto._id } },
      }
    );

    const pathPhoto = `./uploads/post/photo/${reverseId(id)}/${
      deletePhoto.name
    }`;
    if (fs.existsSync(pathPhoto)) {
      fs.unlinkSync(pathPhoto);
    }
    return res.status(200).json({ message: 'You deleted an image!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

module.exports = router;
