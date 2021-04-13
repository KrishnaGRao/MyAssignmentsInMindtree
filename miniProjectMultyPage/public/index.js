"use strict";
//import Book from "./Book";
//import Book from "./Book";
//var Book :Book = require('./Book');
var Book = /** @class */ (function () {
    //let details: string
    function Book(id, name, author, price, rating) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
    return Book;
}());
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.BooksArray = [];
    }
    BookManager.prototype.BookListDisplay = function () {
        var bookSearchBody = document.getElementById("BookSearchBody");
        var bookListBody = document.getElementById("BookListBody");
        var addBookBody = document.getElementById("addBookBody");
        // if (bookListBody && bookSearchBody && addBookBody) {
        //     bookSearchBody.style.display = "none";
        //     bookListBody.style.display = "inline";
        //     addBookBody.style.display = "none";
        // }
        var bltBody = document.getElementById("BlTbody");
        bltBody.innerHTML = "";
        this.BooksArray = JSON.parse(localStorage.getItem("data"));
        for (var i = 0; i < this.BooksArray.length; i++) {
            var bg = "";
            if (i % 2 === 1) {
                bg = "background-color : rgb(234,200,204);";
            }
            else {
                bg = "background-color : rgb(210,260,230);";
            }
            var row = "<tr>\n                        <td style=\"" + bg + "\">" + this.BooksArray[i].id + "</td>\n                        <td style=\"" + bg + "\">" + this.BooksArray[i].name + "</td>\n                        <td style=\"" + bg + "\">" + this.BooksArray[i].author + "</td>\n                        <td style=\"" + bg + "\">" + this.BooksArray[i].price + "</td>\n                        <td style=\"" + bg + "\">" + this.BooksArray[i].rating + "</td>\n                        <td style=\"" + bg + "\"><input type=\"button\" class=\"delPertBtn\" value=\"Delete\" onclick=\"bm.deletePerticularBook(" + this.BooksArray[i].id + ")\"></td>\n                <tr>";
            bltBody.innerHTML += row;
        }
    };
    BookManager.prototype.deletePerticularBook = function (id) {
        var data = JSON.parse(localStorage.getItem("data") || "[]");
        data.forEach(function (element) {
            if (element.id === id) {
                var indexAt = data.indexOf(element);
                data.splice(indexAt, 1);
            }
            localStorage.setItem("data", JSON.stringify(data));
        });
        this.BookListDisplay();
    };
    BookManager.prototype.AddBookBody = function () {
        var bookSearchBody = document.getElementById("BookSearchBody");
        var bookListBody = document.getElementById("BookListBody");
        var addBookBody = document.getElementById("addBookBody");
        // if (bookListBody && bookSearchBody && addBookBody) {
        //     bookSearchBody.style.display = "none";
        //     bookListBody.style.display = "none";
        //     addBookBody.style.display = "inline";
        // }
    };
    BookManager.prototype.AddBook = function () {
        if (localStorage.getItem("data") == null) {
            localStorage.setItem("data", "[]");
        }
        console.log("AddBook Got Called");
        var newBookId = document.getElementById("newBookId").value;
        var newBookName = document.getElementById("newBookName").value;
        var newBookAuthor = document.getElementById("newBookAuthor").value;
        var newBookPrice = document.getElementById("newBookPrice").value;
        var newBookRating = document.getElementById("newBookRating").value;
        var b = new Book(Number(newBookId), newBookName, newBookAuthor, Number(newBookPrice), Number(newBookRating));
        //this.BooksArray.push(b);
        window.alert("Book Added Successfully");
        //console.log(this.BooksArray);
        var data = JSON.parse(localStorage.getItem("data") || "[]");
        data.push(b);
        localStorage.setItem("data", JSON.stringify(data));
    };
    BookManager.prototype.SearchBookBody = function () {
        var bookSearchBody = document.getElementById("BookSearchBody");
        var bookListBody = document.getElementById("BookListBody");
        var addBookBody = document.getElementById("addBookBody");
        // if (bookListBody && bookSearchBody && addBookBody) {
        //     bookSearchBody.style.display = "inline";
        //     bookListBody.style.display = "none";
        //     addBookBody.style.display = "none";
        // }
    };
    BookManager.prototype.searchBooks = function () {
        var searchType = document.getElementById("select").value;
        var searchValue = document.getElementById("searching").value;
        document.getElementById("searchTBody").innerHTML = "";
        var searchedBook;
        switch (searchType) {
            case "SearchByID":
                searchedBook = this.searchByID(Number(searchValue));
                for (var i = 0; i < searchedBook.length; i++) {
                    var bg = "";
                    if (i % 2 === 1) {
                        bg = "background-color : rgb(234,200,204);";
                    }
                    else {
                        bg = "background-color : rgb(210,260,230);";
                    }
                    var row = "<tr>\n                        <td style=\"" + bg + "\">" + searchedBook[i].id + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].name + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].author + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].price + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].rating + "</td>\n                    <tr>";
                    document.getElementById("searchTBody").innerHTML += row;
                }
                break;
            case "SearchByName":
                searchedBook = this.searchByName(searchValue);
                for (var i = 0; i < searchedBook.length; i++) {
                    var bg = "";
                    if (i % 2 === 1) {
                        bg = "background-color : rgb(234,200,204);";
                    }
                    else {
                        bg = "background-color : rgb(210,260,230);";
                    }
                    var row = "<tr>\n                        <td style=\"" + bg + "\">" + searchedBook[i].id + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].name + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].author + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].price + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].rating + "</td>\n                    <tr>";
                    document.getElementById("searchTBody").innerHTML += row;
                }
                break;
            case "SearchByAuthor":
                searchedBook = this.searchByAuthor(searchValue);
                for (var i = 0; i < searchedBook.length; i++) {
                    var bg = "";
                    if (i % 2 === 1) {
                        bg = "background-color : rgb(234,200,204);";
                    }
                    else {
                        bg = "background-color : rgb(210,260,230);";
                    }
                    var row = "<tr>\n                        <td style=\"" + bg + "\">" + searchedBook[i].id + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].name + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].author + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].price + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].rating + "</td>\n                    <tr>";
                    document.getElementById("searchTBody").innerHTML += row;
                }
                break;
            case "SearchByRating":
                searchedBook = this.searchByRating(Number(searchValue));
                for (var i = 0; i < searchedBook.length; i++) {
                    var bg = "";
                    if (i % 2 === 1) {
                        bg = "background-color : rgb(234,200,204);";
                    }
                    else {
                        bg = "background-color : rgb(210,260,230);";
                    }
                    var row = "<tr>\n                        <td style=\"" + bg + "\">" + searchedBook[i].id + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].name + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].author + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].price + "</td>\n                        <td style=\"" + bg + "\">" + searchedBook[i].rating + "</td>\n                    <tr>";
                    document.getElementById("searchTBody").innerHTML += row;
                }
                break;
        }
    };
    BookManager.prototype.searchByID = function (id) {
        var searchedBook = [];
        var data = JSON.parse(localStorage.getItem("data") || "[]");
        data.forEach(function (element) {
            if (element.id === id) {
                searchedBook.push(element);
            }
        });
        return searchedBook;
    };
    BookManager.prototype.searchByName = function (name) {
        var searchedBook = [];
        var data = JSON.parse(localStorage.getItem("data") || "[]");
        data.forEach(function (element) {
            if (element.name === name) {
                searchedBook.push(element);
            }
        });
        return searchedBook;
    };
    BookManager.prototype.searchByAuthor = function (authorName) {
        var searchedBook = [];
        var data = JSON.parse(localStorage.getItem("data") || "[]");
        data.forEach(function (element) {
            if (element.author === authorName) {
                searchedBook.push(element);
            }
        });
        return searchedBook;
    };
    BookManager.prototype.searchByRating = function (rating) {
        var searchedBook = [];
        var data = JSON.parse(localStorage.getItem("data") || "[]");
        data.forEach(function (element) {
            if (element.rating >= rating) {
                searchedBook.push(element);
            }
        });
        return searchedBook;
    };
    return BookManager;
}());
var bm = new BookManager();
//localStorage.setItem('bookManager','bm');
