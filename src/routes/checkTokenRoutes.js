const express = require('express');
const AuthMiddleware = require('../middlewares/authMiddleware');
const checkTokenController = require('../controllers/checkTokenController');
const router = express.Router();

router.post('/checktoken',AuthMiddleware, checkTokenController.checkToken);


module.exports = router;