const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    match : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match",
        required: true,
    },
    team : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
    },
    predictedAt : {
        type : Date
    }
}, { timestamps: true });

module.exports = mongoose.model("Prediction",predictionSchema);