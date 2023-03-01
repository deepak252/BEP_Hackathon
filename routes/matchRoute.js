const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchController");
const auth = require("../middlewares/authMiddleware")

router.get("/match/allMatches", matchController.getAllMatches);
router.post("/match/matchByDate", auth, matchController.getMatchByDate);
router.post("/match/createMatch", matchController.createMatch);
router.post("/match/setResult", matchController.setResult);

module.exports = router;
