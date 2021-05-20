import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom';
import { BooksContext } from "../Providers/books/books.provider";

const PerticularBookDetails = (props: any) => {

    let history = useHistory();
    const { id }: { id: any } = useParams();
    console.log("Id is " + id)
    // const [book, setBook] = useState(Object);
    let bookVar: any = ""
    const { books, removeBook, authUser } = useContext(BooksContext);

    // useEffect(()=>{
    //     loadBook()
    // },[])

    const loadBook = () => {
        // const result:any = await axios.get(`http://localhost:3003/books/${id}`)
        // setBook(result.data);
        const book = books.filter((book: any) => {
            return book.id === id ? book : null
        })
        // setBook(book)
        bookVar = book
    }

    loadBook()

    const deleteThisBook = async (id: any) => {
        const res = window.confirm("You realy wants to delete this book")
        if (res) {
            // const token  = localStorage.getItem('token')
            // if(token)
            // await axios.delete(`http://localhost:3003/books/${id}`,{headers:{token:token}, data:{token:token}});
            removeBook(id)

            history.push("/")
        }
    }

    return (<div className="perticularBooks container">
        <h2> {bookVar[0].title} </h2>
        <div className="mainImgDiv container"> <img src={bookVar[0].cover} className="mainImg"></img></div>
        <div className="divContent"><b>Title : </b>{bookVar[0].title}</div>
        <div className="divContent"><b>Author : </b>{bookVar[0].author}</div>
        <div className="divContent"><b>Rating : </b>{bookVar[0].rating}</div>
        <div className="divContent"><b>Price : </b>{bookVar[0].price}</div>
        <p><b>Description : </b>{bookVar[0].description}</p>
        {/* <div><button>Delete this Book</button></div> */}
        {authUser ?
            <button className="btn btn-danger btn-sm rounded-0" onClick={() => deleteThisBook(bookVar[0].id)}>Delete this Book</button>
            : ""}
    </div>)
}

export default PerticularBookDetails;