import React, { useEffect, useState } from "react"
import axios from "axios"

const AuthorList = () => {

    const [books, setBook] = useState([]);

    useEffect(() => { 
        console.log("This is book's Use Effect");
        loadBooks();
    }, [])

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:3003/books?all");
        console.log("result",result.data);
        
        setBook(result.data)
        console.log("books",books);
    }

    // let authors: Array<string> = [];
    // books.map((book: any) => (
    //     (authors.includes(book.auhtor))?"":authors.push(book.author)
    // ))

    // const authors2 = books.filter((book:any)=>{
    //     return(authors.includes(book.auhtor))?"":(book.author)
    // })

    // var n = authors.includes("Mango");

    return (<div>
        <h2>Auhtors List</h2>
        <div className="container m-5 list-group">
            {
                books.map((book: any) => (
                    <a href="#" className="list-group-item list-group-item-action">{book.author}</a>
                ))

            }</div>
    </div>)
} 

export default AuthorList; 