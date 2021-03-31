const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.jwtFunc = async (value) => {
  const { _id, name, avatar, roles } = value;
  return await jwt.sign(
    {
      _id: _id,
      name: name,
      avatar: avatar,
      roles: roles,
    },
    process.env.SECRET_KEY,
    { expiresIn: process.env.lifeOfJWTToken }
  );
};
