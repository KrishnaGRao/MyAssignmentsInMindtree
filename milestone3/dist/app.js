"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require("express");
var express_1 = __importDefault(require("express"));
require("./conn");
var router = require("./bookRouter");
var app = express_1.default();
var port = process.env.PORT || 3000;
// if you are using json data in your express app and if you are sending it through postman then you need to get the permission form the express application
app.use(express_1.default.json());
app.use(router);
app.listen(port, function () {
    console.log("connection is live with port no " + port);
});
