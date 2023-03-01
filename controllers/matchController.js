const { default: mongoose } = require("mongoose");
const Match = require("../models/match");
const Prediction = require("../models/prediction");
const User = require("../models/user");
const { errorMessage, successMessage } = require("../utils/responseUtils");

module.exports.createMatch = async (req,res)=>{
    try{
        const {team1,team2,matchDate} = req.body;
        if(!team1 || !team2 || !matchDate){
            return res.status(400).json(errorMessage("team1,team2 and matchDate are required"));
        }
        var match  = await Match.create({team1,team2,matchDate});
        return res.json(successMessage(match));
        
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

module.exports.getAllMatches = async (req,res)=>{
    try{
        var allMatches = await Match.find().populate('team1 team2');
        return res.json(successMessage(allMatches));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}



module.exports.getMatchByDate = async (req,res)=>{
    try{
        if(!req.body.date){
            return res.status(400).json(errorMessage("Match date is required!"));
        }
        var matchDate = new Date(req.body.date);
        
        var match = await getMatchFromDate(matchDate);
        // console.log(match);
        if(!match){
            return res.status(400).json(errorMessage("No match on given date!"));
        }
        var data = {};
        data["allMatches"]  = [match];

        var currentDate = new Date(new Date().toUTCString());
        var timeRemaining = (matchDate-currentDate)/1000; // Time remaining in minutes
        if(timeRemaining>0){
            data["timeRemaining"] = timeRemaining;
        }
        var prediction = await Prediction.findOne({
            match : match._id,
            user : req.user._id
        });
        if(prediction){
            data["prediction"] = prediction;
        }
        console.log(data)
        return res.json(successMessage(data));

    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

module.exports.setResult = async (req,res)=>{
    try{
        var teamNo = req.body.teamNo
        if(!teamNo){
            return res.status(400).json(errorMessage("teamNo (1 or 2), match id (optional) is required"));
        }
        if(teamNo!=1 && teamNo!=2){
            return res.status(400).json(errorMessage("Invalid teamNo"));
        }
        var match;
        if(req.body.match){
            match = await Match.findById(req.body.match);
        }else{
            match = await getMatchFromDate(new Date());
        }
        if(!match){
            return res.status(400).json(errorMessage("No match found"));
        }
        if(match.winner){
            return res.status(400).json(errorMessage("Match result already declared!"));
        }
        var winnerId = teamNo===1 ? match.team1._id : match.team2._id;
        match.winner = mongoose.Types.ObjectId(winnerId);
        // Get Correct Predictions
        var predictions = await Prediction.find({
            match : match.id, 
            team : winnerId
        });
        // console.log({predictions});
        var userIds = predictions.map(predict=>predict.user);
        // Update users score
        await User.updateMany(
            { "_id": {$in: userIds} },
            {$inc : {'score' : 10}},  // increment score 10
        )

        await match.save();
        
        return res.json(successMessage(match));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}


const getMatchFromDate=async(matchDate)=>{
    matchDate.setHours(16,30,0,0);
    matchDate = matchDate.toISOString();
        
    return await Match.findOne({
        matchDate
    },).populate('team1 team2');
}