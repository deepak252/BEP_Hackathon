const { errorMessage } = require("../utils/responseUtils");
const jwt = require("jsonwebtoken");
/**
 *  Verify user token
 * */ 
module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json(errorMessage("Authentication token is required"))
        }
        var data = jwt.verify(token, process.env.JWT_SECRET);
        // token verified successfully
        req.user = data;
        next();
    }catch(err){
        return res.status(400).json(errorMessage(err))

    }
}