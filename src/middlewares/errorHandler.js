const { validationResult } = require("express-validator");
const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";
  const stack = err.stack || null;
  const errors = err.errors || null;

  return res.status(statusCode).json({
    success: false,
    message,
    ...(stack && { stack }),
    ...(errors && { errors }),
  });
};

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // const errorMsg = errors.array().map(err => err.msg);
    const errorMsg = errors.array()[0].msg;

    return res.status(200).json({
      success: false,
      // type: "validationError",
      message: errorMsg
    });
  }
  next();
};

module.exports = { errorHandler,validateRequest };
