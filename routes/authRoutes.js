const express = require('express');
const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('../models/User');
const Token = require('../models/Token');
const { errorMonitor } = require('events');
const { encrypt } = require('../outils/crypto');
const { jwtFunc } = require('../outils/jwt');
const {
  transformValueAccess,
  reverseValue,
} = require('../outils/transform-value');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, surname, age, avatar, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: 'Account with that email address already exists.',
      });
    }
    const createUser = await new User(req.body).save();

    if (createUser) {
      const tokenHex = crypto.randomBytes(16).toString('hex');
      const token = new Token({
        user: createUser._id,
        token: tokenHex,
      });
      await token.save();
      return res.status(201).json({ message: 'Your account created!' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(404).json({ message: `User not found!` });
    } else {
      const {
        password: userPwd,
        isVerified,
        roles,
        name,
        _id,
        avatar,
      } = findUser;
      const isMatch = await findUser.comparePassword(password, userPwd);

      if (isMatch && isVerified) {
        const token = await jwtFunc({ _id, name, avatar, roles });

        return res.status(200).json({
          token: encrypt(token, process.env.ENCRYPTION_KEY),
          user: {
            tokenUser: reverseValue(_id),
            name: name,
            avatar: avatar,
            roles: transformValueAccess(roles),
          },
          expiresIn: process.env.lifeOfJWTToken,
        });
      } else {
        return res.status(401).json({
          message:
            'Authentication failed. Passwords did not match or Account not activated !',
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something is wrongs!' });
  }
});

module.exports = router;
