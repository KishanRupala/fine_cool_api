const express = require('express');
const { addRoleValidation } = require('../validations/roleValidation');
const { getRoles, addRole } = require('../controllers/roleController');
const router = express.Router();

// Get all roles
router.get('/list',getRoles);
router.post('/add',addRoleValidation,addRole);


module.exports = router;
