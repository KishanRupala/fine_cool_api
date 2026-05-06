const express = require('express');
const {loginValidation,otpVerifyValidation} = require('../validations/authValidations');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/login',loginValidation, authController.loginUser);
router.post('/otpVerify',otpVerifyValidation,authController.otpVerify);


module.exports = router;