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
// import express = require('express');
var router = express_1.default.Router(); //new express.Router();
var BooksDB = require("./bookdb");
//we will hande post req
router.post("/books", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var addingNewBook, insertedBooks, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                addingNewBook = new BooksDB(req.body);
                console.log(req.body);
                return [4 /*yield*/, addingNewBook.save()];
            case 1:
                insertedBooks = _a.sent();
                res.status(201).send(insertedBooks);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400).send(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//get req for perticular book by id
router.get("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, getBook, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.params.id;
                return [4 /*yield*/, BooksDB.findById(_id)];
            case 1:
                getBook = _a.sent();
                res.send(getBook);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(400).send(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//get req for finding books in given price range
router.get("/books", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, _a, getBook, err_3, getBook, err_4, rangeURL, range, getBook, error_1, getBooks, err_5, err_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 20, , 21]);
                query = req.query;
                console.log(Object.keys(query)[0]);
                _a = Object.keys(query)[0];
                switch (_a) {
                    case 'title': return [3 /*break*/, 1];
                    case 'author': return [3 /*break*/, 5];
                    case 'price': return [3 /*break*/, 9];
                    case 'all': return [3 /*break*/, 14];
                }
                return [3 /*break*/, 18];
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, BooksDB.find({ title: query[Object.keys(query)[0]] })];
            case 2:
                getBook = _b.sent();
                res.send(getBook);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                res.status(400).send(err_3);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 19];
            case 5:
                _b.trys.push([5, 7, , 8]);
                return [4 /*yield*/, BooksDB.find({ author: query[Object.keys(query)[0]] })];
            case 6:
                getBook = _b.sent();
                res.send(getBook);
                return [3 /*break*/, 8];
            case 7:
                err_4 = _b.sent();
                res.status(400).send(err_4);
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 19];
            case 9:
                rangeURL = query[Object.keys(query)[0]];
                range = rangeURL.split(',');
                _b.label = 10;
            case 10:
                _b.trys.push([10, 12, , 13]);
                return [4 /*yield*/, BooksDB.find({ price: { $gte: range[0], $lte: range[1] } })];
            case 11:
                getBook = _b.sent();
                res.send(getBook);
                return [3 /*break*/, 13];
            case 12:
                error_1 = _b.sent();
                res.status(400).send(error_1);
                return [3 /*break*/, 13];
            case 13: return [3 /*break*/, 19];
            case 14:
                _b.trys.push([14, 16, , 17]);
                return [4 /*yield*/, BooksDB.find({})];
            case 15:
                getBooks = _b.sent();
                res.send(getBooks);
                return [3 /*break*/, 17];
            case 16:
                err_5 = _b.sent();
                res.status(400).send(err_5);
                return [3 /*break*/, 17];
            case 17: return [3 /*break*/, 19];
            case 18:
                res.status(400).send("Wrong Key");
                _b.label = 19;
            case 19: return [3 /*break*/, 21];
            case 20:
                err_6 = _b.sent();
                res.status(400).send(err_6);
                return [3 /*break*/, 21];
            case 21: return [2 /*return*/];
        }
    });
}); });
//patch req for updating perticular book by id
router.patch("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, getBook, err_7;
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
                err_7 = _a.sent();
                res.status(500).send(err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//DELETE req for updating perticular book by id
router.delete("/books/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, getBook, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.params.id;
                return [4 /*yield*/, BooksDB.findByIdAndDelete(_id)];
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
module.exports = router;
