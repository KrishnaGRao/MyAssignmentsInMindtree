//import Book from "./Book";

//import Book from "./Book";

//var Book :Book = require('./Book');


class Book {
    readonly id: number;
    readonly name: string;
    readonly author: string
    readonly price: number;
    readonly rating: number;
    //let details: string

    constructor(id: number, name: string, author: string, price: number, rating: number) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
}


class BookManager {

    BooksArray: Book[] = [];
    
    BookListDisplay() {
        let bookSearchBody = document.getElementById("BookSearchBody");
        let bookListBody = document.getElementById("BookListBody");
        let addBookBody = document.getElementById("addBookBody");

        // if (bookListBody && bookSearchBody && addBookBody) {
        //     bookSearchBody.style.display = "none";
        //     bookListBody.style.display = "inline";
        //     addBookBody.style.display = "none";
        // }

        let bltBody = document.getElementById("BlTbody");
        bltBody!.innerHTML=""

        this.BooksArray = JSON.parse(localStorage.getItem("data")!);
        for (let i = 0; i < this.BooksArray.length; i++) {
            let bg = "";
            if (i % 2 === 1) {
                bg = "background-color : rgb(234,200,204);";
            } else {
                bg = "background-color : rgb(210,260,230);";
            }
            let row = `<tr>
                        <td style="${bg}">${this.BooksArray[i].id}</td>
                        <td style="${bg}">${this.BooksArray[i].name}</td>
                        <td style="${bg}">${this.BooksArray[i].author}</td>
                        <td style="${bg}">${this.BooksArray[i].price}</td>
                        <td style="${bg}">${this.BooksArray[i].rating}</td>
                        <td style="${bg}"><input type="button" class="delPertBtn" value="Delete" onclick="bm.deletePerticularBook(${this.BooksArray[i].id})"></td>
                <tr>`;

            bltBody!.innerHTML += row;

        }

    }

    deletePerticularBook(id: number) {
        let data: Book[] = JSON.parse(localStorage.getItem("data")||"[]");
        data.forEach(element => {
            if (element.id === id) {
                const indexAt = data.indexOf(element);
                data.splice(indexAt, 1)
            }
            localStorage.setItem("data", JSON.stringify(data));
        });
        this.BookListDisplay();
    }

    AddBookBody() {
        let bookSearchBody = document.getElementById("BookSearchBody");
        let bookListBody = document.getElementById("BookListBody");
        let addBookBody = document.getElementById("addBookBody");

        // if (bookListBody && bookSearchBody && addBookBody) {
        //     bookSearchBody.style.display = "none";
        //     bookListBody.style.display = "none";
        //     addBookBody.style.display = "inline";
        // }

    }

    AddBook() {
        
        if(localStorage.getItem("data")==null){
            localStorage.setItem("data","[]");
        }
        
        console.log("AddBook Got Called")
        let newBookId = (<HTMLInputElement>document.getElementById("newBookId")).value;
        let newBookName = (<HTMLInputElement>document.getElementById("newBookName")).value;
        let newBookAuthor = (<HTMLInputElement>document.getElementById("newBookAuthor")).value;
        let newBookPrice = (<HTMLInputElement>document.getElementById("newBookPrice")).value;
        let newBookRating = (<HTMLInputElement>document.getElementById("newBookRating")).value;
        
        let b = new Book(Number(newBookId), newBookName, newBookAuthor, Number(newBookPrice), Number(newBookRating));

        //this.BooksArray.push(b);
        
        window.alert("Book Added Successfully");
        //console.log(this.BooksArray);

        var data = JSON.parse(localStorage.getItem("data")||"[]");
        data.push(b);
        localStorage.setItem("data", JSON.stringify(data));
    }

    SearchBookBody() {
        let bookSearchBody = document.getElementById("BookSearchBody");
        let bookListBody = document.getElementById("BookListBody");
        let addBookBody = document.getElementById("addBookBody");

        // if (bookListBody && bookSearchBody && addBookBody) {
        //     bookSearchBody.style.display = "inline";
        //     bookListBody.style.display = "none";
        //     addBookBody.style.display = "none";
        // }
    }

    searchBooks() {
        let searchType = (<HTMLInputElement>document.getElementById("select")).value;
        let searchValue = (<HTMLInputElement>document.getElementById("searching")).value;

        document.getElementById("searchTBody")!.innerHTML = ""

        let searchedBook: Book[];

        switch (searchType) {
            case "SearchByID":
                searchedBook = this.searchByID(Number(searchValue));

                for (let i = 0; i < searchedBook.length; i++) {
                    let bg = "";
                    if (i % 2 === 1) {
                        bg = "background-color : rgb(234,200,204);";
                    } else {
                        bg = "background-color : rgb(210,260,230);";
                    }
                    let row = `<tr>
                        <td style="${bg}">${searchedBook[i].id}</td>
                        <td style="${bg}">${searchedBook[i].name}</td>
                        <td style="${bg}">${searchedBook[i].author}</td>
                        <td style="${bg}">${searchedBook[i].price}</td>
                        <td style="${bg}">${searchedBook[i].rating}</td>
                    <tr>`;
                    document.getElementById("searchTBody")!.innerHTML += row;
                }
                break;

            case "SearchByName":
                searchedBook = this.searchByName(searchValue);
                for (let i = 0; i < searchedBook.length; i++) {
                    let bg = "";
                    if (i % 2 === 1) {
                        bg = "background-color : rgb(234,200,204);";
                    } else {
                        bg = "background-color : rgb(210,260,230);";
                    }
                    let row = `<tr>
                        <td style="${bg}">${searchedBook[i].id}</td>
                        <td style="${bg}">${searchedBook[i].name}</td>
                        <td style="${bg}">${searchedBook[i].author}</td>
                        <td style="${bg}">${searchedBook[i].price}</td>
                        <td style="${bg}">${searchedBook[i].rating}</td>
                    <tr>`;
                    document.getElementById("searchTBody")!.innerHTML += row;
                }
                break;
            case "SearchByAuthor":
                searchedBook = this.searchByAuthor(searchValue);
                for (let i = 0; i < searchedBook.length; i++) {
                    let bg = "";
                    if (i % 2 === 1) {
                        bg = "background-color : rgb(234,200,204);";
                    } else {
                        bg = "background-color : rgb(210,260,230);";
                    }
                    let row = `<tr>
                        <td style="${bg}">${searchedBook[i].id}</td>
                        <td style="${bg}">${searchedBook[i].name}</td>
                        <td style="${bg}">${searchedBook[i].author}</td>
                        <td style="${bg}">${searchedBook[i].price}</td>
                        <td style="${bg}">${searchedBook[i].rating}</td>
                    <tr>`;
                    document.getElementById("searchTBody")!.innerHTML += row;
                }
                break;
            case "SearchByRating":
                searchedBook = this.searchByRating(Number(searchValue));
                for (let i = 0; i < searchedBook.length; i++) {
                    let bg = "";
                    if (i % 2 === 1) {
                        bg = "background-color : rgb(234,200,204);";
                    } else {
                        bg = "background-color : rgb(210,260,230);";
                    }
                    let row = `<tr>
                        <td style="${bg}">${searchedBook[i].id}</td>
                        <td style="${bg}">${searchedBook[i].name}</td>
                        <td style="${bg}">${searchedBook[i].author}</td>
                        <td style="${bg}">${searchedBook[i].price}</td>
                        <td style="${bg}">${searchedBook[i].rating}</td>
                    <tr>`;
                    document.getElementById("searchTBody")!.innerHTML += row;
                }
                break;
        }
    }

    searchByID(id: Number) {
        let searchedBook: Book[] = []
        let data: Book[] = JSON.parse(localStorage.getItem("data")||"[]");
        data.forEach(element => {
            if (element.id === id) {
                searchedBook.push(element);
            }
        });
        return searchedBook;
    }

    searchByName(name: string) {
        let searchedBook: Book[] = []
        let data: Book[] = JSON.parse(localStorage.getItem("data")||"[]")
        data.forEach(element => {
            if (element.name === name) {
                searchedBook.push(element);
            }
        });
        return searchedBook;
    }

    searchByAuthor(authorName: string) {
        let searchedBook: Book[] = []
        let data: Book[] = JSON.parse(localStorage.getItem("data")||"[]")
        data.forEach(element => {
            if (element.author === authorName) {
                searchedBook.push(element);
            }
        });
        return searchedBook;
    }

    searchByRating(rating: number) {
        let searchedBook: Book[] = []
        let data: Book[] = JSON.parse(localStorage.getItem("data")||"[]")
        data.forEach(element => {
            if (element.rating >= rating) {
                searchedBook.push(element);
            }
        });
        return searchedBook;
    }

}



let bm = new BookManager();
//localStorage.setItem('bookManager','bm');

