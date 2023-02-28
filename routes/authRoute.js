const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/auth/signIn", authController.signIn);
router.post("/auth/signUp", authController.signUp);

module.exports = router;

