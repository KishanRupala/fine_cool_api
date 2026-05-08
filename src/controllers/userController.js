const Roles = require("../models/roles");
const User = require("../models/users");
const AppError = require("../utils/AppError");
const tryCatch = require("../utils/tryCatch");

const addUser = tryCatch(async (req, res) => {
  const {
    username,
    email,
    password,
    role_id,
    contact_no,
    area,
    city,
    state,
    pincode,
    company_name,
  } = req.body;

  const existingContact = await User.findOne({ where: { contact_no } });
  if (existingContact) {
    throw new AppError("Contact number already exists", 200);
  }
  let roleObject = null;
  if (role_id) {
    roleObject = await Roles.findOne({ where: { role_id: parseInt(role_id) } });
  }
  await User.create({
    username: username || "",
    contact_no,
    email: email || null,
    password,
    role_name: roleObject?.name || "Technician",
    role_id: roleObject?.role_id || 3,
    area: area || "",
    city: city || "",
    state: state || "",
    pincode: pincode || "",
    company_name,
  });

  res.status(201).json({
    success: true,
    message: "add User successfully",
  });
});

const getUsers = tryCatch(async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({
    success: true,
    message: "User List Found",
    data: users,
  });
});

module.exports = { addUser, getUsers };
