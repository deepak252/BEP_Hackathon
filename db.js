const mongoose = require("mongoose");
require("dotenv").config()
const dbUrl = process.env.MONGODB_URI;
// mongoose.set('strictQuery', true);
const connectToMongo = () =>{
    mongoose.connect(dbUrl,(err)=>{
        if(err){
            console.error("Error connecting to database, ", err);
        }else{
            console.log("Successfully connected to database");
        }  
    })
}
module.exports = connectToMongo;
