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
        matchDate.setHours(16,30,0,0);

        // var matchDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(),date.getDate(), 11,0,0 )).toISOString()
        var allMatches = await Match.find({
            matchDate
        }).populate('team1 team2');
        var currentDate = new Date(new Date().toUTCString())
        var timeRemaining = (matchDate-currentDate)/1000; // Time remaining in minutes
        if (timeRemaining < 0)
            return res.json(successMessage({
                allMatches
            }));
        else 
        return res.json(successMessage({
            allMatches,
            timeRemaining
        }));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

