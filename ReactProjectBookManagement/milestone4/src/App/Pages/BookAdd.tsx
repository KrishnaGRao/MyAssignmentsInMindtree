import axios from "axios"
import React, { useContext, useState } from "react"
import { useHistory } from "react-router"
import { v4 as uuidv4 } from 'uuid';
import { BooksContext } from "../../Providers/books/books.provider";


export default function BookAdd() {

    const { createBook } = useContext(BooksContext)

    let history = useHistory();
    const [book, setBook] = useState({
        id: "",
        title: "",
        author: "",
        price: "",
        cover: "",
        rating: "",
        description: ""
    })

    const onInputChange = (e: any) => {
        // console.log(e.target.value);
        setBook({ ...book, [e.target.name]: e.target.value, id:uuidv4() })
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();

        // setBook({ ...book, id: uuidv4() })

        createBook(book);
        
        
        // const token  = localStorage.getItem('token')

        // const data = { 
        //     "book":book,
        //     "token":token
        // }

        // await axios.post("http://localhost:3003/books",data)
        // .then(resp => {
        //     console.log(resp.data);
        // }).catch(error => {
        //     console.log("Book is't added, session may be expired / you need to login again : ",error);
        // });

        history.push("/")
    }

    return (<>
        <h2>Add Book</h2>

        <form className="container p-5">
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Enter Book Title</label>
                <input type="text" className="form-control form-control-lg" name="title" onChange={e => onInputChange(e)} placeholder="Enter Book Title ..." />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Enter Book Author</label>
                <input type="text" className="form-control form-control-lg " name="author" onChange={e => onInputChange(e)} placeholder="Enter Book Author ..." />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Enter Book Price</label>
                <input type="text" className="form-control form-control-lg" name="price" onChange={e => onInputChange(e)} placeholder="Enter Book Price ..." />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Enter Book Cover Url</label>
                <input type="text" className="form-control form-control-lg" name="cover" onChange={e => onInputChange(e)} placeholder="Enter Book Cover Url ..." />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Enter Book Rating</label>
                <input type="text" className="form-control form-control-lg" name="rating" onChange={e => onInputChange(e)} placeholder="Enter Book Rating ..." />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Enter Book Description</label>
                <input type="text" className="form-control form-control-lg" name="description" onChange={e => onInputChange(e)} placeholder="Enter Book Description ..." />
            </div>
            <button className="btn btn-primary" onClick={e => onSubmit(e)}>Add Book</button>
        </form>

    </>)
}

