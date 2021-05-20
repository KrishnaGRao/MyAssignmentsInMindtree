"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// import express,{Request,Response} from "express";
var express_1 = __importDefault(require("express"));
var bcript = require("bcryptjs");
// import express = require('express');
var router = express_1.default.Router(); //new express.Router();
var BooksDB = require("./bookdb");
var UserModel = require("./userModel");
var jwt = require('jsonwebtoken');
var JWT_SECRET = 'sjkfh4bfufu@&#T*djdejbgu82y3870()shgs^JSH';
//we will hande post req
router.post("/books", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, token, book, user, addingNewBook, insertedBooks, err_1, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, token = _a.token, book = _a.book;
                user = jwt.verify(token, JWT_SECRET);
                console.log(user.id);
                if (!user.id) return [3 /*break*/, 4];
                console.log("jwt decoded user is : ", user);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                addingNewBook = new BooksDB(book);
                // console.log("books is  : ",book);
                console.log("req.body : ", req.body);
                return [4 /*yield*/, addingNewBook.save()];
            case 2:
                insertedBooks = _b.sent();
                res.status(201).send(insertedBooks);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                res.status(400).send(err_1);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                err_2 = _b.sent();
                res.status(500).send({ status: 'error', error: err_2 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
//get req for perticular book by id
router.get("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, getBook, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.params.id;
                return [4 /*yield*/, BooksDB.findById(_id)];
            case 1:
                getBook = _a.sent();
                // console.log("Book is : "+getBook)
                res.send(getBook);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(400).send(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//get req for finding books in given price range
router.get("/books", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, getBook, err_4, getBook, err_5, rangeURL, range, getBook, error_1, getBook, error_2, getBooks, err_6, err_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Credentials", "true");
                res.setHeader("Access-Control-Max-Age", "1800");
                res.setHeader("Access-Control-Allow-Headers", "content-type");
                res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
                _b.label = 1;
            case 1:
                _b.trys.push([1, 25, , 26]);
                query = req.query;
                console.log(Object.keys(query)[0]);
                _a = Object.keys(query)[0];
                switch (_a) {
                    case 'title': return [3 /*break*/, 2];
                    case 'author': return [3 /*break*/, 6];
                    case 'price': return [3 /*break*/, 10];
                    case 'rating': return [3 /*break*/, 15];
                    case 'all': return [3 /*break*/, 19];
                }
                return [3 /*break*/, 23];
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, BooksDB.find({ title: query[Object.keys(query)[0]] })];
            case 3:
                getBook = _b.sent();
                res.send(getBook);
                return [3 /*break*/, 5];
            case 4:
                err_4 = _b.sent();
                res.status(400).send(err_4);
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 24];
            case 6:
                _b.trys.push([6, 8, , 9]);
                return [4 /*yield*/, BooksDB.find({ author: query[Object.keys(query)[0]] })];
            case 7:
                getBook = _b.sent();
                res.send(getBook);
                return [3 /*break*/, 9];
            case 8:
                err_5 = _b.sent();
                res.status(400).send(err_5);
                return [3 /*break*/, 9];
            case 9: return [3 /*break*/, 24];
            case 10:
                rangeURL = query[Object.keys(query)[0]];
                range = rangeURL.split('/');
                _b.label = 11;
            case 11:
                _b.trys.push([11, 13, , 14]);
                return [4 /*yield*/, BooksDB.find({ price: { $gte: range[0], $lte: range[1] } })];
            case 12:
                getBook = _b.sent();
                res.send(getBook);
                return [3 /*break*/, 14];
            case 13:
                error_1 = _b.sent();
                res.status(400).send(error_1);
                return [3 /*break*/, 14];
            case 14: return [3 /*break*/, 24];
            case 15:
                _b.trys.push([15, 17, , 18]);
                return [4 /*yield*/, BooksDB.find({ rating: { $gte: query[Object.keys(query)[0]] } })];
            case 16:
                getBook = _b.sent();
                res.send(getBook);
                return [3 /*break*/, 18];
            case 17:
                error_2 = _b.sent();
                res.status(400).send(error_2);
                return [3 /*break*/, 18];
            case 18: return [3 /*break*/, 24];
            case 19:
                _b.trys.push([19, 21, , 22]);
                return [4 /*yield*/, BooksDB.find({})];
            case 20:
                getBooks = _b.sent();
                res.send(getBooks);
                return [3 /*break*/, 22];
            case 21:
                err_6 = _b.sent();
                res.status(400).send(err_6);
                return [3 /*break*/, 22];
            case 22: return [3 /*break*/, 24];
            case 23:
                res.status(400).send("Wrong Key");
                _b.label = 24;
            case 24: return [3 /*break*/, 26];
            case 25:
                err_7 = _b.sent();
                res.status(400).send(err_7);
                return [3 /*break*/, 26];
            case 26: return [2 /*return*/];
        }
    });
}); });
//patch req for updating perticular book by id
router.patch("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, getBook, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.params.id;
                return [4 /*yield*/, BooksDB.findByIdAndUpdate(_id, req.body, { new: true })];
            case 1:
                getBook = _a.sent();
                res.send(getBook);
                return [3 /*break*/, 3];
            case 2:
                err_8 = _a.sent();
                res.status(500).send(err_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//DELETE req for updating perticular book by id
router.delete("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, user, _id, getBook, err_9, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                token = req.body.token;
                user = jwt.verify(token, JWT_SECRET);
                if (!user) return [3 /*break*/, 4];
                console.log("jwt decoded user is : ", user);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                _id = req.params.id;
                console.log("id is = ", _id);
                return [4 /*yield*/, BooksDB.findByIdAndDelete(_id)];
            case 2:
                getBook = _a.sent();
                res.status(201).send(getBook);
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                res.status(500).send(err_9);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                err_10 = _a.sent();
                res.status(500).send({ status: 'error', error: err_10 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
router.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, email, existingEmail, salt, passHash, newUsers, saveUser, err_11;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                _a = req.body, username = _a.username, password = _a.password, email = _a.email;
                if (!username || !password || !email) {
                    res.status(400).json({ msg: "All field require ... " });
                }
                return [4 /*yield*/, UserModel.findOne({ email: email })];
            case 2:
                existingEmail = _b.sent();
                if (existingEmail) {
                    res.status(400).json({ msg: "Email Already in use ... " });
                }
                return [4 /*yield*/, bcript.genSalt(10)];
            case 3:
                salt = _b.sent();
                return [4 /*yield*/, bcript.hash(password, salt)
                    // console.log("Hashed Password ",passHash)
                ];
            case 4:
                passHash = _b.sent();
                newUsers = new UserModel({ username: username, password: passHash, email: email });
                return [4 /*yield*/, newUsers.save()];
            case 5:
                saveUser = _b.sent();
                res.json(saveUser);
                return [3 /*break*/, 7];
            case 6:
                err_11 = _b.sent();
                if (err_11.code === 11000) {
                    //duplicate key
                    return [2 /*return*/, res.json({ status: 'error', error: 'Username or Email already in use .. ' })];
                }
                // res.status(500).send("Server error : "+err);
                throw err_11;
            case 7: return [2 /*return*/];
        }
    });
}); });
router.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, token, err_12;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                if (!(username && password)) return [3 /*break*/, 4];
                return [4 /*yield*/, UserModel.findOne({ username: username }).lean()];
            case 2:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.json({ status: "error", error: 'Invalid username/password' })];
                }
                return [4 /*yield*/, bcript.compare(password, user.password)];
            case 3:
                if (_b.sent()) {
                    // the username and password combination is successful
                    console.log("User Model _id  :", user._id);
                    token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "100s" });
                    return [2 /*return*/, res.json({ status: "ok", token: token })];
                }
                res.json({ status: 'error', error: 'Invalid username/password' });
                return [3 /*break*/, 5];
            case 4: return [2 /*return*/, res.status(400).json({ msg: "all field required ... " })];
            case 5: return [3 /*break*/, 7];
            case 6:
                err_12 = _b.sent();
                res.send("Error : " + err_12.message);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
