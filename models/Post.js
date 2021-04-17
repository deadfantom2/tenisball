const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
    },
    userAvatar: { type: String },
    name: { type: String, default: '' },
    title: { type: String, default: '' },
    bitkin: { type: String },
    petrov: { type: String },
    imperator: { type: String, default: 'petr1' },
    certificate: { type: String },
    description: { type: String },
    link_video: { type: String },
    photos: [
      {
        photo: { type: mongoose.Schema.Types.ObjectId, ref: 'PhotoModel' },
      },
    ],
    comments: [
      {
        comment: { type: mongoose.Schema.Types.ObjectId, ref: 'CommentModel' },
      },
    ],
    totalLikes: { type: Number, default: 0 },
    likes: [
      {
        userId: { type: String, default: '' },
        name: { type: String, default: '' },
      },
    ],
    favorites: [
      {
        user: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PostModel', PostSchema);
