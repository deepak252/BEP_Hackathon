const User = require("../models/user");
const { errorMessage, successMessage } = require("../utils/responseUtils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.signUp = async (req,res)=>{
    try{
        var {name,email,password} = req.body;
        console.log(req.body)
        if(!email || !password || !name){
            
            return res.status(400).json(errorMessage("name,email and password are required"));
        }
        email = email.toLowerCase();
        var user = await  User.findOne({email : email});
        if(user){
            return res.status(400).json(errorMessage("User already exists with this email"));
        }
        const passwordHash = await bcrypt.hash(password,10);
        user = await User.create({
            name,
            email,
            password : passwordHash
        });
        
        const token = await jwt.sign({user},process.env.JWT_SECRET);
        return res.json(successMessage({
            message : "Account created successfully",
            token
        }));
    }catch(err){
        console.log(err)
        return res.status(400).json(errorMessage(err.message));
    }
}

module.exports.signIn = async (req,res)=>{
    try{
        var {email, password} = req.body;
        
        if(!email || !password){
            res.status(400).json(errorMessage("email and password are required"));
            return;
        }
        email = email.toLowerCase();
        var user = await User.findOne({email : email});
        console.log(user)
        if(!user){
            return res.status(400).json(errorMessage("Invalid email/password"));
        }
        var passwordMatched = await bcrypt.compare(password, user.password);
        if(!passwordMatched){
            return res.status(400).json(errorMessage("Invalid email/password"));
        }
        const token = await jwt.sign({user},process.env.JWT_SECRET);
        return res.json(successMessage({
            message : "Sign In successful",
            token
        }));
    }catch(err){
        console.log("ERROR ,",err);
        return res.status(400).json(errorMessage(err.message));
    }
}