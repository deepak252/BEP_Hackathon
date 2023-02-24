const express = require("express");
const router = express.Router();
const predictionController = require("../controllers/predictionController");
const auth = require("../middlewares/authMiddleware");

router.get("/prediction/allPredictions",auth, predictionController.getAllPredictions);
router.post("/prediction/createPrediction",auth, predictionController.createPrediction);

module.exports = router;
