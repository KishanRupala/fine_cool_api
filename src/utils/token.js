const jwt = require('jsonwebtoken');

const generateToken = (user, time = '10m') => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: time
  });

  return token
}

module.exports = {
  generateToken
}