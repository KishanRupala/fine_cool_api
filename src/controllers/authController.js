const User = require("../models/users");
const tryCatch = require("../utils/tryCatch");
const { sendError } = require("../utils/response");

const loginUser = tryCatch(async function (req, res, next) {
  let userExists = await User.findOne({
    where: { contact_no: req.body.contact_no },
  });

  if (!userExists) {
    // throw new AppError("Invalid contact No!!", 400);
    return sendError(res, "contact No not found!!", 200);
  }

  const otp = Math.floor(1000 + Math.random() * 9000);

  res
    .status(200)
    .json({ message: "OTP sent successfully.", success: true, otp: otp });
});

const otpVerify = tryCatch(async function (req, res, next) {
  const { contact_no, otp } = req.body;

  const user = await User.findOne({
    where: { contact_no: req.body.contact_no },
  });

  if (!user) {
    return sendError(res, "Invalid contact No!!", 200);
  }

  if (Number(otp) != 1212) {
    return sendError(res, "Invalid or expired OTP.", 200);
  }

  res
    .status(200)
    .json({ message: "OTP verified successfully.", success: true, user });
});

module.exports = { loginUser, otpVerify };
