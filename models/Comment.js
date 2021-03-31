const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PostModel',
    },
    name: { type: String, default: '' },
    userAvatar: { type: String },
    comment: { type: String, default: '' },
    totalLikes: { type: Number, default: 0 },
    likes: [{ userId: { type: String }, name: { type: String, default: '' } }],
    totalReports: { type: Number, default: 0 },
    reports: [
      {
        userId: { type: String, default: '' },
        name: { type: String, default: '' },
      },
    ],
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CommentModel', CommentSchema);
