const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
    team1 : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
    },
    team2 : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
    },
    matchDate : {
        type : Date
    },
    winner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    },


}, { timestamps: true });

module.exports = mongoose.model("Match",matchSchema);