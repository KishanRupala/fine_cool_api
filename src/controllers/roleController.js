const Roles = require("../models/roles");
const tryCatch = require("../utils/tryCatch");
const AppError = require("../utils/AppError");
const { Op } = require("sequelize");

const getRoles = tryCatch(async (req, res, next) => {
  const roles = await Roles.findAll();

  res.status(200).json({
    success: true,
    count: roles.length,
    message: "Role List Found",
    data: roles,
  });
});

const addRole = tryCatch(async (req, res, next) => {
  const { role_name } = req.body;

  const existingRole = await Roles.findOne({ where: { role_name } });

  if (existingRole) {
    throw new AppError(res, "Role Name already exists!", 200);
  }

  const newRole = await Roles.create({ role_name });

  return res.status(201).json({
    success: true,
    message: "Role added successfully",
  });
});

module.exports = { getRoles, addRole };
