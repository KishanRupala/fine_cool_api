const express = require('express');
const AuthMiddleware = require('../middlewares/authMiddleware');
const jobController = require('../controllers/jobController');
const router = express.Router();

router.post('/add',AuthMiddleware,jobController.addJob);
router.post('/list',AuthMiddleware,jobController.listJobs);

module.exports = router;