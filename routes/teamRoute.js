const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

router.get("/team/allTeams", teamController.getAllTeams);
router.post("/team/createTeam", teamController.createTeam);

module.exports = router;
