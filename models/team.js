const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name : {
        type : String
    },
    imgUrl : {
        type : String
    },
    captainImg : {
        type : String
    },
    teamColor : {
        type : String
    }
}, { timestamps: true });

module.exports = mongoose.model("Team",teamSchema);