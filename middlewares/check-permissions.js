const jwt = require('jsonwebtoken');
const { decrypt } = require('../outils/crypto');
require('dotenv').config();

const User = require('../models/User');
const Comment = require('../models/Comment');

// Check if User can create a comment
exports.checkCommentPemisison = async (req, res, next) => {
  const token = decrypt(
    req.headers.authorization.split(' ')[1],
    process.env.ENCRYPTION_KEY
  );
  const { _id } = await jwt.verify(token, process.env.SECRET_KEY);

  try {
    const { isCanWrite } = await User.findById({ _id });
    if (isCanWrite) {
      next();
    } else {
      res.status(403).json({
        message: `You can't publish any comments. Please contact support!`,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
};

// Check if you can edit/delete your comment or modify
exports.checkYourCommentPemisison = async (req, res, next) => {
  try {
    const token = decrypt(
      req.headers.authorization.split(' ')[1],
      process.env.ENCRYPTION_KEY
    );
    const { _id } = jwt.verify(token, process.env.SECRET_KEY);
    const { user: userId } = await Comment.findOne({ user: _id });
    if (userId && userId == _id) {
      next();
    } else {
      return res
        .status(403)
        .json({ message: `You can do it, only for your comments!` });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
};
