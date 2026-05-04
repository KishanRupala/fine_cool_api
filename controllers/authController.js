const User = require("../models/users");
const tryCatch = require("../utils/tryCatch");
const AppError = require("../utils/AppError");


const loginUser = tryCatch(async function (req, res, next) {

  let userExists = await User.findOne({
    where: { contact_no: req.body.contact_no },
  });

  if (!userExists) {
    throw new AppError("Invalid contact No!!", 400);
  }

  const otp = Math.floor(1000 + Math.random() * 9000);

   res.status(200).json({ message: "OTP sent successfully.", success: true, otp:otp });
});


module.exports = {loginUser}