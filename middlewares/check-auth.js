const jwt = require('jsonwebtoken');
const { decrypt } = require('../outils/crypto');
require('dotenv').config();

// Check if User connected
exports.checkAuth = async (req, res, next) => {
  try {
    const token = decrypt(
      req.headers.authorization.split(' ')[1],
      process.env.ENCRYPTION_KEY
    );
    const { _id, name, roles, avatar } = jwt.verify(
      token,
      process.env.SECRET_KEY
    );
    req.user = {
      id: _id,
      name: name,
      avatar: avatar,
      roles: roles,
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Please Authenticate!' });
  }
};

// Verification if User is ADMIN
exports.checkAdmin = async (req, res, next) => {
  const { roles } = req.user;
  if (roles === 'ADMIN_ROLE') {
    next();
  } else {
    return res.status(403).json({ message: `You don't have any permission!` });
  }
};

// Forbid access for ADMIN changes(role or activation mode account), when you connected
exports.checkAdminYourSelfPermission = async (req, res, next) => {
  const { id, isAdmin } = req.user;

  if (isAdmin && id !== req.params.id) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: `You can't change yourseful information!` });
  }
};
