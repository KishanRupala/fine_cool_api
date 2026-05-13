const { body } = require("express-validator");
const { validateRequest } = require("../middlewares/errorHandler");

const addValidation = [
  body("name").notEmpty().withMessage("Please enter the name"),
  validateRequest,
];

const deleteValidation = [
  body("id").notEmpty().withMessage("Please enter the id"),
  validateRequest,
];

module.exports = { addValidation, deleteValidation };
