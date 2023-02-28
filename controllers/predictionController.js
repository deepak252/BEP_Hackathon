const { Mongoose } = require("mongoose");
const Match = require("../models/match");
const Prediction = require("../models/prediction");
const { errorMessage, successMessage } = require("../utils/responseUtils");

module.exports.createPrediction = async (req,res)=>{
    try{
        const {match,team} = req.body;  // match & team ids
        if(!match || !team){
            return res.status(400).json(errorMessage("match, team id are required"));
        }
        // Check whether user already predicted for the match
        var predict = await Prediction.findOne({
            match : match, user : req.user._id
        });
        if(predict){
            return res.status(400).json(errorMessage("Prediction already submitted!"));
        }
        // Get match from match Id
        var matchRes = await Match.findById(match);
        if(!matchRes){
            return res.status(400).json(errorMessage("No match found!"));
        }
        const currDate = new Date();
        var matchDate = matchRes.matchDate;
        // console.log(currDate,matchDate)
        // Check if match is already started OR ended, stop predictions
        if(currDate.getTime() > matchDate.getTime()){
            return res.status(400).json(errorMessage("Prediction submission closed."));
        }
        // Check whether team exists in match
        if(!matchRes.team1.equals(team) && !matchRes.team2.equals(team)){
            return res.status(400).json(errorMessage("Team doesn't exists in the match!"));
        }
        
        var predict = await Prediction.create({
            "user" : req.user._id,
            match,
            team,
            "predictedFor" : matchDate
        });

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
        .populate("user team match");
        return res.json(successMessage(pastPredictions));
    } catch(err) {
        console.log(err);
        return res.status(400).json(errorMessage(err.message));
    }
}
