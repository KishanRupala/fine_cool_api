const { body } = require("express-validator");
const { validateRequest } = require("../middlewares/errorHandler");

const loginValidation = [
    body("contact_no").notEmpty().withMessage("contact no. is a required field.").bail().isLength({min:10,max:13}).withMessage("please enter valid contact no."),
    validateRequest
];

module.exports = {loginValidation}