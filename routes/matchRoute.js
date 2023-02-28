const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchController");
const auth = require("../middlewares/authMiddleware")

router.get("/match/allMatches", matchController.getAllMatches);
router.post("/match/matchByDate", matchController.getMatchByDate);
router.post("/match/createMatch", matchController.createMatch);

module.exports = router;
