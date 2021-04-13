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
//module.exports.Book = Book;
export { Book };
