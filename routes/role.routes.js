const express = require('express');
const Roles = require('../models/roles');
const router = express.Router();

// Get all roles
router.get('/list', async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.status(200).json({
      success: true,
      count: roles.length,
      message: "Role List Found",
      data: roles
    });
  } catch (error) {
    console.error('Error fetching roles:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching roles'
    });
  }
});


module.exports = router;
