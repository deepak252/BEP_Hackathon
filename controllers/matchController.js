const { default: mongoose } = require("mongoose");
const Match = require("../models/match");
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

        var currentDate = new Date(new Date().toUTCString());
        var timeRemaining = (matchDate-currentDate)/1000; // Time remaining in minutes
        if (timeRemaining < 0)
            return res.json(successMessage({
                "allMatches" : [match]
            }));
        else 
        return res.json(successMessage({
            match,
            timeRemaining
        }));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

module.exports.setResult = async (req,res)=>{
    try{
        var teamNo = req.body.teamNo
        if(!teamNo){
            return res.status(400).json(errorMessage("teamNo (1 or 2) is required"));
        }
        if(teamNo!=1 && teamNo!=2){
            return res.status(400).json(errorMessage("Invalid teamNo"));
        }
        var match = await getMatchFromDate(new Date());
        
        if(!match){
            return res.status(400).json(errorMessage("No match found"));
        }
        match.winner = mongoose.Types.ObjectId(
            teamNo===1 ? match.team1._id : match.team2._id
        )

        await match.save();
        
        if(!match){
            return res.status(400).json(errorMessage("No match found on given date"));
        }

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