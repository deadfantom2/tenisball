const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const bcrypt = require('bcrypt');

// Name Validator
const nameValidator = [
  validate({
    validator: 'matches',
    arguments: /^([a-zA-Z]{3,30})+$/,
    message:
      'Name must be at least 3 characters and maximum 30, no special characters or numbers.',
  }),
  validate({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
];
// E-mail Validator
const emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'E-mail is not a valid.',
  }),
  validate({
    validator: 'isLength',
    arguments: [11, 50],
    message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
];
// Password Validator
const passwordValidator = [
  validate({
    validator: 'isLength',
    arguments: [4, 100],
    message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
];
// Role Validator
const rolesValidator = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE}  is not role valid!!',
};
// Photo route Validator
const imageRoutesValidator = {
  values: ['photos'],
  message: "{VALUE} it's fail route!",
};
// SIMPLE, GOOGLE, FACEBOOK social auth Validator
const socialValidator = {
  values: ['SIMPLE', 'GOOGLE', 'FACEBOOK'],
  message: "{VALUE} it's fail type account!",
};

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true, validate: nameValidator },
    surname: { type: String, default: '' },
    age: { type: Number, default: 18, min: 18 },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: emailValidator,
    },
    password: { type: String, required: true, validate: passwordValidator },
    avatar: { type: String, default: '/images/petr1.jpg' },
    roles: { type: String, default: 'USER_ROLE', enum: rolesValidator },
    isVerified: { type: Boolean, default: true },
    isCanPost: { type: Boolean, default: true },
    isCanWrite: { type: Boolean, default: true },
    isReported: { type: Boolean, default: false },
    totalReports: { type: Number, default: 0 },
    reportsTime: { type: Date },
    socialAuth: { type: String, default: 'SIMPLE', enum: socialValidator },
    photos: [
      {
        photo: { type: mongoose.Schema.Types.ObjectId, ref: 'PhotoModel' },
      },
    ],
    posts: [
      {
        _postId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'PostModel',
        },
        post: { type: String },
        createdAt: { type: Date, default: new Date() },
      },
    ],
    favorites: [
      {
        title: { type: String },
        folderPhoto: { type: String },
        photo: { type: String },
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        postId: { type: mongoose.Schema.Types.ObjectId, required: true },
        createdAt: { type: Date, default: new Date() },
      },
    ],
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true }
);

// Saves the user's password hashed (plain text password storage is not good)
UserSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {}
});

// Create method to compare password input to password saved in database
UserSchema.methods.comparePassword = async (reqBodyPwd, dbUserPwd) => {
  return await bcrypt.compare(reqBodyPwd, dbUserPwd);
};

module.exports = mongoose.model('UserModel', UserSchema);
