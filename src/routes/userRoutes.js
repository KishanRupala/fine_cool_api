const express = require('express');
const { addUserValidation } = require('../validations/userValidations');
const userController = require('../controllers/userController');
const router = express.Router();

// Get all users
router.get('/list',userController.getUsers);
router.post('/add',addUserValidation,userController.addUser);


module.exports = router;
