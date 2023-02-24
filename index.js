const express = require("express");
const { successMessage } = require("./utils/responseUtils");
const connectMongo = require("./db");
const cors = require('cors');

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use(require("./routes/authRoute"));
app.use(require("./routes/matchRoute"));
app.use(require("./routes/teamRoute"));
app.use(require("./routes/predictionRoute"));

connectMongo();

app.get("/",(req,res)=>{
    return res.json(successMessage("Welcome To SPL - Sasta Premier League"));
})


app.listen(process.env.PORT,()=>{
    console.log("Server is running at Port ", PORT);
})