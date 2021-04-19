//const express = require("express")
//const mongoose = require("mongoose")
import mongoose from "mongoose";
import express from "express";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    price: {
        type: Number,
    },
    description: {type: String},
    rating: {type:Number}
})

//creating a collection
const BooksDB:any = mongoose.model("Booksdb",bookSchema)    //new mongoose.model("Booksdb",bookSchema) <- in js 

module.exports = BooksDB;