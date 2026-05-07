const Roles = require("../models/roles");
const tryCatch = require("../utils/tryCatch");
const AppError = require("../utils/AppError");
const { Op } = require('sequelize');

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
  const { role_id, role_name } = req.body;

  const existingRole = await Roles.findOne({
  where: {
    [Op.or]: [
      { role_id },
      { role_name }
    ]
  }
});

  if (existingRole) {
  if (existingRole.role_id === role_id) {
    return sendError(res, "Role ID already exists!", 400);
  }

  if (existingRole.role_name === role_name) {
    return sendError(res, "Role Name already exists!", 400);
  }
}

  const newRole = await Roles.create({ role_id, role_name });

 return res.status(201).json({
    success: true,
    message: "Role added successfully",
    data: newRole,
  });
});

module.exports = { getRoles, addRole };