// const express = require("express");
// import express,{Request,Response} from "express";
import express, { Request, Response, Application } from 'express';

const bcript = require("bcryptjs")
// import express = require('express');
const router = express.Router();        //new express.Router();
const BooksDB = require("./bookdb");
const UserModel = require("./userModel");
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'sjkfh4bfufu@&#T*djdejbgu82y3870()shgs^JSH'

//we will hande post req
router.post("/books", async (req: Request, res: Response) => {
   
    try {
        const { token , book} = req.body
        const user = jwt.verify(token, JWT_SECRET)
        console.log(user.id)

        if (user.id) {
            console.log("jwt decoded user is : ", user);
            
            try {
                //req.body will fetch the data which are being sended throgh postman>body>raw>json
                const addingNewBook = new BooksDB(book)
                // console.log("books is  : ",book);
                console.log("req.body : ",req.body);
                const insertedBooks = await addingNewBook.save();
                res.status(201).send(insertedBooks);
            } catch (err) {
                res.status(400).send(err);
            }
        }
    } catch (err) {
        res.status(500).send({ status: 'error', error: err })
    }
})


//get req for perticular book by id
router.get("/books/:id", async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const getBook = await BooksDB.findById(_id);
        // console.log("Book is : "+getBook)
        res.send(getBook);
    } catch (err) {  
        res.status(400).send(err);
    }
})


//get req for finding books in given price range
router.get("/books", async (req: Request, res: Response) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

    try {
        const query = req.query;
        console.log(Object.keys(query)[0]);

        switch (Object.keys(query)[0]) {
            case 'title':
                try {
                    //console.log(query[Object.keys(query)[0]]);  
                    const getBook = await BooksDB.find({ title: query[Object.keys(query)[0]] });
                    res.send(getBook);
                } catch (err) {
                    res.status(400).send(err);
                }
                break;
            case 'author':
                try {
                    //console.log(query[Object.keys(query)[0]]);  
                    const getBook = await BooksDB.find({ author: query[Object.keys(query)[0]] });
                    res.send(getBook);
                } catch (err) {
                    res.status(400).send(err);
                }
                break;
            case 'price':
                const rangeURL: any = query[Object.keys(query)[0]];
                const range = rangeURL.split('/');
                // console.log("range 1 "+range[0]);
                // console.log("range 2 "+range[1]);
                try {
                    const getBook = await BooksDB.find({ price: { $gte: range[0], $lte: range[1] } });
                    res.send(getBook);
                } catch (error) {
                    res.status(400).send(error);
                }
                break;
            case 'rating':
                try {
                    const getBook = await BooksDB.find({ rating: { $gte: query[Object.keys(query)[0]] } });
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
router.patch("/books/:id", async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const getBook = await BooksDB.findByIdAndUpdate(_id, req.body, { new: true });   //here i have wite ,{new:true} just because i want that findByIdAndUpdate function returns updated result not old result 
        res.send(getBook);
    } catch (err) {
        res.status(500).send(err);
    }
})

//DELETE req for updating perticular book by id
router.delete("/books/:id", async (req: Request, res: Response) => {

    try {
        const { token } = req.body
        const user = jwt.verify(token, JWT_SECRET)
        if (user) {
            console.log("jwt decoded user is : ", user);

            try {
                const _id = req.params.id;  //it will return id, which we have passed in url
                console.log("id is = ",_id);
                
                const getBook = await BooksDB.findByIdAndDelete(_id);
                res.status(201).send(getBook);
            } catch (err) {
                res.status(500).send(err);
            }

        }
    } catch (err) {
        res.status(500).send({ status: 'error', error: err })
    }
})


router.post('/register', async (req: Request, res: Response) => {
    console.log(req.body)
    // res.json({status:'ok'})
    try {
        const { username, password, email } = req.body;
        if (!username || !password || !email) {
            res.status(400).json({ msg: "All field require ... " })
        }
        const existingEmail = await UserModel.findOne({ email })
        if (existingEmail) {
            res.status(400).json({ msg: "Email Already in use ... " })
        }

        const salt = await bcript.genSalt(10)
        const passHash = await bcript.hash(password, salt)

        // console.log("Hashed Password ",passHash)

        const newUsers = new UserModel({ username, password: passHash, email })
        const saveUser = await newUsers.save();
        res.json(saveUser)


    } catch (err: any) {
        if (err.code === 11000) {
            //duplicate key
            return res.json({ status: 'error', error: 'Username or Email already in use .. ' })
        }
        // res.status(500).send("Server error : "+err);
        throw err
    }
})

router.post("/login", async (req: Request, res: Response) => {
    const { username, password } = req.body
    // console.log("un: "+username+" pw :"+password);s
    
    try {
        if (username && password) {
            const user = await UserModel.findOne({ username }).lean(); //lean will represent very simple model in json

            if (!user) {
                return res.json({ status: "error", error: 'Invalid username/password' })
            }
            if (await bcript.compare(password, user.password)) {
                // the username and password combination is successful
                console.log("User Model _id  :",user._id)
                const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "100s" })

                return res.json({ status: "ok", token: token })
            }

            res.json({ status: 'error', error: 'Invalid username/password' })
        } else {
            return res.status(400).json({ msg: "all field required ... " })
        }
    } catch (err) {
        res.send("Error : " + err.message)
    }
})

module.exports = router;