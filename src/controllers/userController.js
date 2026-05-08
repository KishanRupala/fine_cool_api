const Roles = require("../models/roles");
const User = require("../models/users");
const AppError = require("../utils/AppError");
const hasValue = require("../utils/hasValue");
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
    id,
  } = req.body;

  if (hasValue(id)) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new AppError("User not found", 204);
    }
    const existingContact = await User.findOne({
      where: {
        contact_no,
      },
    });

    if (existingContact && existingContact.id !== Number(id)) {
      throw new AppError("Contact number already exists", 400);
    }


    console.log(hasValue(role_id)+ " user data");
    
    let roleObject = null;

    if (role_id) {
      roleObject = await Roles.findOne({
        where: {
          role_id: parseInt(role_id),
        },
      });

      if (!hasValue(roleObject)) {
      throw new AppError("Enter a valid role id", 200);
    }}

    
    await user.update({
      username: username || "",
      contact_no: contact_no,
      email: email || null,
      password: password || user.password,
      role_name: roleObject?.role_name || user.role_name,
      role_id: roleObject?.role_id || user.role_id,
      area: area || "",
      city: city || "",
      state: state || "",
      pincode: pincode || "",
      company_name,
    });

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  }

  // add new user

  const existingContact = await User.findOne({ where: { contact_no } });
  if (existingContact) {
    throw new AppError("Contact number already exists", 200);
  }
  let roleObject = null;
  if (role_id) {
    roleObject = await Roles.findOne({
      where: { role_id: parseInt(role_id) },
    });
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
    message: "User added successfully",
  });
});

const getUsers = tryCatch(async (req, res) => {
  const users = await User.findAll({
    attributes: {
      exclude: ["token", "password"],
    },
  });
  res.status(200).json({
    success: true,
    message: "User List Found",
    data: users,
  });
});

const commonFindOne = async (model, whereCondition = {}, attributes = null) => {
  const data = await model.findOne({
    where: whereCondition,

    ...(attributes && {
      attributes,
    }),
  });

  return data;
};

module.exports = { addUser, getUsers };
