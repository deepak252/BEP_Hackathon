const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");

router.get("/user/allUsers", userController.getAllUsers);
router.get("/user/userProfile",auth,  userController.getUserProfile);
router.get("/user/topUsers",  userController.topUsersByScore);

module.exports = router;
