const Roles = require("../models/roles");
const User = require("../models/users");
const { sendError, sendSuccess } = require("../utils/response");
const tryCatch = require("../utils/tryCatch");

const addUser = tryCatch(async (req, res) => {
  const { username, email, password, role_id, contact_no } = req.body;

  console.log("email" + email);

  const existingContact = await User.findOne({ where: { contact_no } });
  if (existingContact) {
    return sendError(res, "Contact number already exists");
  }
  let roleObject = null;
  if (role_id) {
    roleObject = await Roles.findOne({ where: { role_id: parseInt(role_id) } });
  }
  console.log("obbhhj " + roleObject);
  await User.create({
    username,
    contact_no,
    email: email || null,
    password,
    role_name: roleObject?.name || "Technician",
    role_id: roleObject?.role_id || 3,
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
