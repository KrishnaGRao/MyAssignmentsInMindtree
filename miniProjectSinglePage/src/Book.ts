export class Book{
    readonly id: number;
    readonly name: string;
    readonly author: string
    readonly price: number;
    readonly rating: number;
    //let details: string

    constructor(id: number, name:string, author:string, price:number, rating:number){
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
}
//module.exports.Book = Book;
//export{Book}