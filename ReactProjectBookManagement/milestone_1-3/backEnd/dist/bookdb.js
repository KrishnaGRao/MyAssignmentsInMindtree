"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express")
//const mongoose = require("mongoose")
var mongoose_1 = __importDefault(require("mongoose"));
var bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    cover: { type: String },
    description: { type: String },
    rating: { type: Number }
});
// var validateEmail = function(email:any) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };
//creating a collection
var BooksDB = mongoose_1.default.model("Booksdb", bookSchema); //new mongoose.model("Booksdb",bookSchema) <- in js 
module.exports = BooksDB;
