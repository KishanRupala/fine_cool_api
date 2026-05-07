const express = require('express');
const { addRoleValidation } = require('../validations/roleValidation');
const { getRoles, addRole } = require('../controllers/roleController');
const AuthMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Get all roles
router.get('/list',AuthMiddleware,getRoles);
router.post('/add',AuthMiddleware,addRoleValidation,addRole);


module.exports = router;
