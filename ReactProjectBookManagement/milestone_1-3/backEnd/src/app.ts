const express = require("express");
// import express from "express";
var cors = require("cors");



require("./conn")
const router = require("./bookRouter");

const app = express();
const port = process.env.PORT || 3003;

// if you are using json data in your express app and if you are sending it through postman then you need to get the permission form the express application
app.use(express.json());
app.use(cors());
app.use(router)
app.listen(port, ()=>{
    console.log(`connection is live with port no ${port}`);
}) 