const { body } = require("express-validator");
const { validateRequest } = require("../middlewares/errorHandler");

const addUserValidation = [
  body("contact_no").notEmpty()
    .withMessage("Please provide a contact number")
    .isLength({ min: 10, max: 13 })
    .withMessage("Enter valid contact number"),
  validateRequest,
];

module.exports = { addUserValidation };