const Match = require("../models/match");
const { errorMessage, successMessage } = require("../utils/responseUtils");

module.exports.createMatch = async (req,res)=>{
    try{
        const {team1,team2,matchDate} = req.body;
        if(!team1 || !team2 || !matchDate){
            res.status(400).json(errorMessage("team1,team2 and matchDate are required"));
            return;
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
        var {date} = req.body;
        var currDate = new Date();
        if(!date){
            
        }
        var allMatches = await Match.find({
            created_on : {
                $gte: new Date(2012, 7, 14), 
                $lt: new Date(2012, 7, 15)
            }
        }).populate('team1 team2');
        return res.json(successMessage(allMatches));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

