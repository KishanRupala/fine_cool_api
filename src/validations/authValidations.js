const { body } = require("express-validator");
const { validateRequest } = require("../middlewares/errorHandler");

const loginValidation = [
    body("contact_no").notEmpty().withMessage("contact no. is a required field.").bail().isLength({min:10,max:13}).withMessage("please enter valid contact no."),
    validateRequest
];
const otpVerifyValidation = [
    body("contact_no").notEmpty().withMessage("contact no. is a required field.").bail().isLength({min:10,max:13}).withMessage("please enter valid contact no."),
    body("otp").notEmpty().withMessage("otp is a required field.").bail().isLength({min:4,max : 4}).withMessage("enter 4 length otp."),
    validateRequest
];

module.exports = {loginValidation , otpVerifyValidation};