const { body } = require("express-validator");
const { validateRequest } = require("../middlewares/errorHandler");

const addRoleValidation = [
  body("role_id").notEmpty().withMessage("Please provid role id and role name"),
  body("role_name")
    .notEmpty()
    .withMessage("Please provid role id and role name").bail()
    .isLength({ min: 3 })
    .withMessage("Role name must be at least 3 characters long."),
  validateRequest,
];

module.exports = { addRoleValidation };