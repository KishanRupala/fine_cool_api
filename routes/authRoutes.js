const express = require('express');
const { loginValidation } = require('../validations/authValidations');
const {loginUser} = require("../controllers/authController");

const router = express.Router();

router.post('/login',loginValidation, loginUser);


module.exports = router;