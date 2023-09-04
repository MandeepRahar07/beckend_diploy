const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hely my endpoint")
})

app.get("/task", (req, res)=>{
    res.send("my task");
})

app.listen(PORT, ()=>{
    console.log("server run at 4000")
})