const Roles = require("../models/roles");
const tryCatch = require("../utils/tryCatch");
const AppError = require("../utils/AppError");
const { Op } = require("sequelize");
const hasValue = require("../utils/hasValue");

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
  const { role_name, role_id } = req.body;

  //add update
  if (hasValue(role_id)) {
    const roles = await Roles.findByPk(role_id);
    if (!roles) {
      throw new AppError("Role not found", 404);
    }
    const existingRole = await Roles.findOne({ where: { role_name } });

    if (existingRole) {
      throw new AppError("Role Name already exists!", 200);
    }

    await roles.update({ role_name: role_name || roles.role_name });

    return res.status(200).json({
      success: true,
      message: "Role updated successfully",
    });
  }

  //add role
  const existingRole = await Roles.findOne({ where: { role_name } });

  if (existingRole) {
    throw new AppError("Role Name already exists!", 200);
  }

  const newRole = await Roles.create({ role_name });

  return res.status(201).json({
    success: true,
    message: "Role added successfully",
  });
});

module.exports = { getRoles, addRole };
