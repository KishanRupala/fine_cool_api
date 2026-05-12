const jwt = require('jsonwebtoken');

const generateToken = (user, time = '10d') => {
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: time
  });

  return token
}

module.exports = {
  generateToken
}