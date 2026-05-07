const jwt = require('jsonwebtoken');

const generateToken = (user, time = '1h') => {
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: time
  });

  return token
}

module.exports = {
  generateToken
}