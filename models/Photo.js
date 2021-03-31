const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema(
  {
    name: String,
    route: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PostModel',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PhotoModel', PhotoSchema);
