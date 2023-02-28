const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchController");
const auth = require("../middlewares/authMiddleware")

router.get("/match/allMatches", matchController.getAllMatches);
router.get("/match/matchByDate", matchController.getAllMatches);
router.post("/match/createMatch", matchController.createMatch);

module.exports = router;
