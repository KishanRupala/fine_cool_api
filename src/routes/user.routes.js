const express = require('express');
const User = require('../models/users');
const Roles = require('../models/roles');
const { validateContactAndEmail } = require('../middlewares/validation');
const router = express.Router();

// Get all users
router.get('/list', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] } // Exclude passwords for security
    });
    
    res.status(200).json({
      success: true,
      count: users.length,
      message : "User List Found",
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching users'
    });
  }
});


router.post('/addUser',validateContactAndEmail, async (req, res) => {
  try {

    const {username, email, password, role_id,contact_no } = req.body;

    const existingContact = await User.findOne({ where: { contact_no } });
    if (existingContact) {
      return res.status(201).json({
        success: false,
        message: "Contact number already exists",
      });
    }

    if (email) {
      const existingEmail = await User.findOne({ where: { email } });
      if (existingEmail) {
        return res.status(200).json({
          success: false,
          message: "Email ID already exists",
        });
      }
    }

    let roleObject = null;
    if(role_id){
       roleObject = await Roles.findOne({where : {role_id : parseInt(role_id)}})
    }
    
     await User.create({
       username,
      contact_no,
     email: email || null,
      password,
       role_name: roleObject?.name || "Technician",
      role_id: roleObject?.role_id || 3
    });
    

    res.status(201).json({
      success: true,
      message: "add User successfully",
    });

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating user',
    });
  }
});


module.exports = router;
