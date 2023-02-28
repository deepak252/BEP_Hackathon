const Match = require("../models/match");
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

module.exports.getPredictionHistory = async (req, res) => {
    try{
        var date = new Date()
        date.setHours(18, 0, 0, 0)
        var pastPredictions = await Prediction.find({
            "user" : req.user._id,
            "predictedFor" : { $lte: date }
        })
        .lean()
        .populate("user team match")
        return res.json(successMessage(pastPredictions));
    } catch(err) {
        console.log(err);
        return res.status(400).json(errorMessage(err.message));
    }
}
