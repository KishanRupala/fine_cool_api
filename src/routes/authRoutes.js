const express = require('express');
const { loginValidation } = require('../validations/authValidations');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/login',loginValidation, authController.loginUser);


module.exports = router;