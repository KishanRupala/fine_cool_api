const sendSuccess = (res, message = "Success",statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
  });
};

const sendError = (res, message = "Something went wrong", statusCode = 200) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = { sendSuccess, sendError };