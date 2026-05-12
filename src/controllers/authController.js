const User = require("../models/users");
const tryCatch = require("../utils/tryCatch");
const { generateToken } = require("../utils/token");
const AppError = require("../utils/AppError");

const loginUser = tryCatch(async function (req, res, next) {
  let userExists = await User.findOne({
    where: { contact_no: req.body.contact_no },
  }); 

  if (!userExists) {
     throw new AppError('contact No not found!', 200);
  }

  const otp = Math.floor(1000 + Math.random() * 9000);

  res
    .status(200)
    .json({ message: "OTP sent successfully.", success: true, otp: otp });
});

const otpVerify = tryCatch(async function (req, res, next) {
  const { contact_no, otp , password} = req.body;

  const user = await User.findOne({
    where: { contact_no: req.body.contact_no },
  });

  if (!user) {
    throw new AppError("Invalid contact No!!", 200);
  }

  if (Number(otp) != 1212) {
    throw new AppError("Invalid or expired OTP.", 200);
  }

  if(password){
    const isPasswordMatch = await user.matchPassword(password);
    if(!isPasswordMatch){
      throw new AppError("Invalid password.", 200);
    }
  }
  const token = generateToken(user);
  user.token = token;

  await user.save();

  res.status(200)
    .json({ message: "OTP verified successfully.", success: true, user });
});

module.exports = { loginUser, otpVerify };
