const Prediction = require("../models/prediction");
const Match = require("../models/match");
const { errorMessage, successMessage } = require("../utils/responseUtils");

module.exports.createPrediction = async (req,res)=>{
    try{
        const {match,team,predictedFor} = req.body;
        if(!match || !team || !predictedFor){
            return res.status(400).json(errorMessage("match, team id, predictedFor are required"));
        }

        var matchRes = Match.findOne({match});
        if(!matchRes){
            return res.status(400).json(errorMessage("No match found!"));
        }

        const currDate = new Date();
        var matchDate = matchRes.matchDate;
        if(currDate.getTime() - matchDate.getTime()>0){
            return res.status(400).json(errorMessage("Invalid date selected!"));
        }

        var predict = await Prediction.create({
            "user" : req.user._id,
            match,
            team,
            "predictedFor" : new Date(predictedFor)});
        return res.json(successMessage(predict));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

module.exports.getAllPredictions = async (req,res)=>{
    try{
        var allPredicts = await Prediction.find();
        return res.json(successMessage(allPredicts));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

