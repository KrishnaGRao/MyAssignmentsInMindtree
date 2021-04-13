/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Book.ts":
/*!*********************!*\
  !*** ./src/Book.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Book = void 0;\r\nvar Book = /** @class */ (function () {\r\n    //let details: string\r\n    function Book(id, name, author, price, rating) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.author = author;\r\n        this.price = price;\r\n        this.rating = rating;\r\n    }\r\n    return Book;\r\n}());\r\nexports.Book = Book;\r\n//module.exports.Book = Book;\r\n//export{Book}\r\n\n\n//# sourceURL=webpack://Project1/./src/Book.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Book_1 = __webpack_require__(/*! ./Book */ \"./src/Book.ts\");\r\n//const Book = require('./Book');\r\n// class Book {\r\n//          readonly id: number;\r\n//     readonly name: string;\r\n//     readonly author: string\r\n//readonly price: number;\r\n//     readonly rating: number;\r\n//     //let details: string\r\n//     constructor(id: number, name: string, author: string, price: number, rating: number) {\r\n//         this.id = id;\r\n//         this.name = name;\r\n//         this.author = author;\r\n//         this.price = price;\r\n//         this.rating = rating;\r\n//     }\r\n// }\r\nvar BookManager = /** @class */ (function () {\r\n    function BookManager() {\r\n        this.BooksArray = [];\r\n    }\r\n    BookManager.prototype.BookListDisplay = function () {\r\n        var bookSearchBody = document.getElementById(\"BookSearchBody\");\r\n        var bookListBody = document.getElementById(\"BookListBody\");\r\n        var addBookBody = document.getElementById(\"addBookBody\");\r\n        if (bookListBody && bookSearchBody && addBookBody) {\r\n            bookSearchBody.style.display = \"none\";\r\n            bookListBody.style.display = \"inline\";\r\n            addBookBody.style.display = \"none\";\r\n        }\r\n        document.getElementById(\"BlTbody\").innerHTML = \"\";\r\n        this.BooksArray = JSON.parse(localStorage.getItem(\"data\"));\r\n        for (var i = 0; i < this.BooksArray.length; i++) {\r\n            var bg = \"\";\r\n            if (i % 2 === 1) {\r\n                bg = \"background-color : rgb(234,200,204);\";\r\n            }\r\n            else {\r\n                bg = \"background-color : rgb(210,260,230);\";\r\n            }\r\n            var row = \"<tr>\\n                        <td style=\\\"\" + bg + \"\\\">\" + this.BooksArray[i].id + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + this.BooksArray[i].name + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + this.BooksArray[i].author + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + this.BooksArray[i].price + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + this.BooksArray[i].rating + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\"><input type=\\\"button\\\" value=\\\"Delete\\\" onclick=\\\"bm.deletePerticularBook(\" + this.BooksArray[i].id + \")\\\"></td>\\n                <tr>\";\r\n            document.getElementById(\"BlTbody\").innerHTML += row;\r\n        }\r\n    };\r\n    BookManager.prototype.deletePerticularBook = function (id) {\r\n        var data = JSON.parse(localStorage.getItem(\"data\") || \"[]\");\r\n        data.forEach(function (element) {\r\n            if (element.id === id) {\r\n                var indexAt = data.indexOf(element);\r\n                data.splice(indexAt, 1);\r\n            }\r\n            localStorage.setItem(\"data\", JSON.stringify(data));\r\n        });\r\n        this.BookListDisplay();\r\n    };\r\n    BookManager.prototype.AddBookBody = function () {\r\n        var bookSearchBody = document.getElementById(\"BookSearchBody\");\r\n        var bookListBody = document.getElementById(\"BookListBody\");\r\n        var addBookBody = document.getElementById(\"addBookBody\");\r\n        if (bookListBody && bookSearchBody && addBookBody) {\r\n            bookSearchBody.style.display = \"none\";\r\n            bookListBody.style.display = \"none\";\r\n            addBookBody.style.display = \"inline\";\r\n        }\r\n    };\r\n    BookManager.prototype.AddBook = function () {\r\n        if (localStorage.getItem(\"data\") == null) {\r\n            localStorage.setItem(\"data\", \"[]\");\r\n        }\r\n        console.log(\"AddBook Got Called\");\r\n        var newBookId = document.getElementById(\"newBookId\").value;\r\n        var newBookName = document.getElementById(\"newBookName\").value;\r\n        var newBookAuthor = document.getElementById(\"newBookAuthor\").value;\r\n        var newBookPrice = document.getElementById(\"newBookPrice\").value;\r\n        var newBookRating = document.getElementById(\"newBookRating\").value;\r\n        var b = new Book_1.Book(Number(newBookId), newBookName, newBookAuthor, Number(newBookPrice), Number(newBookRating));\r\n        //this.BooksArray.push(b);\r\n        window.alert(\"Book Added Successfully\");\r\n        //console.log(this.BooksArray);\r\n        var data = JSON.parse(localStorage.getItem(\"data\") || \"[]\");\r\n        data.push(b);\r\n        localStorage.setItem(\"data\", JSON.stringify(data));\r\n    };\r\n    BookManager.prototype.SearchBookBody = function () {\r\n        var bookSearchBody = document.getElementById(\"BookSearchBody\");\r\n        var bookListBody = document.getElementById(\"BookListBody\");\r\n        var addBookBody = document.getElementById(\"addBookBody\");\r\n        if (bookListBody && bookSearchBody && addBookBody) {\r\n            bookSearchBody.style.display = \"inline\";\r\n            bookListBody.style.display = \"none\";\r\n            addBookBody.style.display = \"none\";\r\n        }\r\n    };\r\n    BookManager.prototype.searchBooks = function () {\r\n        var searchType = document.getElementById(\"select\").value;\r\n        var searchValue = document.getElementById(\"searching\").value;\r\n        document.getElementById(\"searchTBody\").innerHTML = \"\";\r\n        var searchedBook;\r\n        switch (searchType) {\r\n            case \"SearchByID\":\r\n                searchedBook = this.searchByID(Number(searchValue));\r\n                for (var i = 0; i < searchedBook.length; i++) {\r\n                    var bg = \"\";\r\n                    if (i % 2 === 1) {\r\n                        bg = \"background-color : rgb(234,200,204);\";\r\n                    }\r\n                    else {\r\n                        bg = \"background-color : rgb(210,260,230);\";\r\n                    }\r\n                    var row = \"<tr>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].id + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].name + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].author + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].price + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].rating + \"</td>\\n                    <tr>\";\r\n                    document.getElementById(\"searchTBody\").innerHTML += row;\r\n                }\r\n                break;\r\n            case \"SearchByName\":\r\n                searchedBook = this.searchByName(searchValue);\r\n                for (var i = 0; i < searchedBook.length; i++) {\r\n                    var bg = \"\";\r\n                    if (i % 2 === 1) {\r\n                        bg = \"background-color : rgb(234,200,204);\";\r\n                    }\r\n                    else {\r\n                        bg = \"background-color : rgb(210,260,230);\";\r\n                    }\r\n                    var row = \"<tr>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].id + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].name + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].author + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].price + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].rating + \"</td>\\n                    <tr>\";\r\n                    document.getElementById(\"searchTBody\").innerHTML += row;\r\n                }\r\n                break;\r\n            case \"SearchByAuthor\":\r\n                searchedBook = this.searchByAuthor(searchValue);\r\n                for (var i = 0; i < searchedBook.length; i++) {\r\n                    var bg = \"\";\r\n                    if (i % 2 === 1) {\r\n                        bg = \"background-color : rgb(234,200,204);\";\r\n                    }\r\n                    else {\r\n                        bg = \"background-color : rgb(210,260,230);\";\r\n                    }\r\n                    var row = \"<tr>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].id + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].name + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].author + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].price + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].rating + \"</td>\\n                    <tr>\";\r\n                    document.getElementById(\"searchTBody\").innerHTML += row;\r\n                }\r\n                break;\r\n            case \"SearchByRating\":\r\n                searchedBook = this.searchByRating(Number(searchValue));\r\n                for (var i = 0; i < searchedBook.length; i++) {\r\n                    var bg = \"\";\r\n                    if (i % 2 === 1) {\r\n                        bg = \"background-color : rgb(234,200,204);\";\r\n                    }\r\n                    else {\r\n                        bg = \"background-color : rgb(210,260,230);\";\r\n                    }\r\n                    var row = \"<tr>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].id + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].name + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].author + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].price + \"</td>\\n                        <td style=\\\"\" + bg + \"\\\">\" + searchedBook[i].rating + \"</td>\\n                    <tr>\";\r\n                    document.getElementById(\"searchTBody\").innerHTML += row;\r\n                }\r\n                break;\r\n        }\r\n    };\r\n    BookManager.prototype.searchByID = function (id) {\r\n        var searchedBook = [];\r\n        var data = JSON.parse(localStorage.getItem(\"data\") || \"[]\");\r\n        data.forEach(function (element) {\r\n            if (element.id === id) {\r\n                searchedBook.push(element);\r\n            }\r\n        });\r\n        return searchedBook;\r\n    };\r\n    BookManager.prototype.searchByName = function (name) {\r\n        var searchedBook = [];\r\n        var data = JSON.parse(localStorage.getItem(\"data\") || \"[]\");\r\n        data.forEach(function (element) {\r\n            if (element.name === name) {\r\n                searchedBook.push(element);\r\n            }\r\n        });\r\n        return searchedBook;\r\n    };\r\n    BookManager.prototype.searchByAuthor = function (authorName) {\r\n        var searchedBook = [];\r\n        var data = JSON.parse(localStorage.getItem(\"data\") || \"[]\");\r\n        data.forEach(function (element) {\r\n            if (element.author === authorName) {\r\n                searchedBook.push(element);\r\n            }\r\n        });\r\n        return searchedBook;\r\n    };\r\n    BookManager.prototype.searchByRating = function (rating) {\r\n        var searchedBook = [];\r\n        var data = JSON.parse(localStorage.getItem(\"data\") || \"[]\");\r\n        data.forEach(function (element) {\r\n            if (element.rating >= rating) {\r\n                searchedBook.push(element);\r\n            }\r\n        });\r\n        return searchedBook;\r\n    };\r\n    return BookManager;\r\n}());\r\nvar bm = new BookManager();\r\n//localStorage.setItem('bookManager','bm');\r\n\n\n//# sourceURL=webpack://Project1/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;