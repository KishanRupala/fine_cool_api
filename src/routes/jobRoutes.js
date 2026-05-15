const express = require("express");
const AuthMiddleware = require("../middlewares/authMiddleware");
const jobController = require("../controllers/jobController");
const {
  addValidation,
  deleteValidation,
  jobTransferValidation,
} = require("../validations/jobValidation");
const router = express.Router();

router.post("/add", AuthMiddleware, addValidation, jobController.addJob);
router.post("/list", AuthMiddleware, jobController.listJobs);
router.post(
  "/delete",
  AuthMiddleware,
  deleteValidation,
  jobController.deletejob,
);
router.post(
  "/jobTransfer",
  AuthMiddleware,
  jobTransferValidation,
  jobController.jobTransfer,
);

module.exports = router;
