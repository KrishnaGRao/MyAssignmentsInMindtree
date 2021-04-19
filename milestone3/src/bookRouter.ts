// const express = require("express");
// import express,{Request,Response} from "express";
import express, { Request, Response, Application } from 'express';

// import express = require('express');
const router = express.Router();        //new express.Router();
const BooksDB = require("./bookdb");


//we will hande post req
router.post("/books", async (req: Request, res: Response) => {
    try {
        //req.body will fetch the data which are being sended throgh postman>body>raw>json
        const addingNewBook = new BooksDB(req.body)
        console.log(req.body);
        const insertedBooks = await addingNewBook.save();
        res.status(201).send(insertedBooks);
    } catch (err) {
        res.status(400).send(err);
    }
})


//get req for perticular book by id
router.get("/books/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getBook = await BooksDB.findById(_id);
        res.send(getBook);
    } catch (err) {
        res.status(400).send(err);
    }
})


//get req for finding books in given price range
router.get("/books", async (req, res) => {
    try {
        const query = req.query;
        console.log(Object.keys(query)[0]);

        switch (Object.keys(query)[0]) {
            case 'title':
                    try {
                        //console.log(query[Object.keys(query)[0]]);  
                        const getBook = await BooksDB.find({title:query[Object.keys(query)[0]]});                         
                        res.send(getBook);
                    } catch (err) { 
                        res.status(400).send(err);
                    } 
                break;
            case 'author':
                try {
                    //console.log(query[Object.keys(query)[0]]);  
                    const getBook = await BooksDB.find({author:query[Object.keys(query)[0]]});                         
                    res.send(getBook);
                } catch (err) { 
                    res.status(400).send(err);
                }
                break;
            case 'price':
                const rangeURL:any = query[Object.keys(query)[0]];
                const range = rangeURL.split(',');
                // console.log("range 1 "+range[0]);
                // console.log("range 2 "+range[1]);
                try {
                    const getBook = await BooksDB.find({price:{$gte:range[0],$lte:range[1]}});                         
                    res.send(getBook);        
                } catch (error) {
                    res.status(400).send(error);
                }
                break;
            case 'all':
            //handling get req for all books
                try {
                    const getBooks = await BooksDB.find({});
                    res.send(getBooks);
                } catch (err) {
                    res.status(400).send(err);
                }
                break;
            default:
                res.status(400).send("Wrong Key")
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

//patch req for updating perticular book by id
router.patch("/books/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getBook = await BooksDB.findByIdAndUpdate(_id, req.body, { new: true });   //here i have wite ,{new:true} just because i want that findByIdAndUpdate function returns updated result not old result 
        res.send(getBook);
    } catch (err) {
        res.status(500).send(err);
    }
})

//DELETE req for updating perticular book by id
router.delete("/books/:id", async (req, res) => {
    try {
        const _id = req.params.id;  //it will return id, which we have passed in line no 57(or in url)
        const getBook = await BooksDB.findByIdAndDelete(_id);
        res.send(getBook);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;