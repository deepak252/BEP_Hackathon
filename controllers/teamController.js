const Team = require("../models/team");
const { errorMessage, successMessage } = require("../utils/responseUtils");

module.exports.createTeam = async (req,res)=>{
    try{
        const {name,imgUrl} = req.body;
        if(!name || !imgUrl){
            res.status(400).json(errorMessage("name and imgUrl are required"));
            return;
        }
        var team = await Team.findOne({name});
        if(!team){
            team = await Team.create({name,imgUrl});
        }
        return res.json(successMessage(team));
        
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

module.exports.getAllTeams = async (req,res)=>{
    try{
        var allTeams = await Team.find();
        return res.json(successMessage(allTeams));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

