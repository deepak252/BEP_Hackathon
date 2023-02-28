const Prediction = require("../models/prediction");
const { errorMessage, successMessage } = require("../utils/responseUtils");

module.exports.createPrediction = async (req,res)=>{
    try{
        const {match,team} = req.body;
        if(!match || !team){
            res.status(400).json(errorMessage("match and team ids are required"));
            return;
        }
        var predict = await Prediction.create({
            "user" : req.user._id,
            match,
            team,
            "predictedAt" : new Date().toString()});
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

