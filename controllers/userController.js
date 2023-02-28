const User = require("../models/user");
const { errorMessage, successMessage } = require("../utils/responseUtils");

module.exports.getAllUsers = async (req,res)=>{
    try{
        var users = await User.find();
        return res.json(successMessage(users));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

module.exports.getUserProfile = async (req,res)=>{
    try{
        var user = await User.findById(req.user._id);
        return res.json(successMessage(user));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}


// For Leaderboard
module.exports.topUsersByScore = async (req,res)=>{
    try{
        var user = await User.find().sort({score : -1});
        return res.json(successMessage(user));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}
