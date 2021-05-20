import React, { useEffect, useState } from "react"
import axios from "axios"
import {useHistory, useParams} from 'react-router-dom';

const PerticularBookDetails = (props:any)=>{

    let history = useHistory();
    const {id}:{id:any} = useParams();
    console.log("Id is "+id)
    const [book, setBook] = useState(Object);

    useEffect(()=>{
        loadBook()
    },[])

    const loadBook = async () => {
        const result:any = await axios.get(`http://localhost:3003/books/${id}`)
        console.log("result is ",result.data)
        setBook(result.data);
    } 
    
    const deleteThisBook = async (id:any)=>{
        const res = window.confirm("You realy wants to delete this book")
        if(res){
            const token  = localStorage.getItem('token')
            // if(token)
            await axios.delete(`http://localhost:3003/books/${id}`,{headers:{token:token}, data:{token:token}});
            history.push("/")            
        } 
    }
    
    return(<div className="perticularBooks container">
        <h2> {book.title} </h2>
        <div className="mainImgDiv container"> <img src={book.cover} className="mainImg"></img></div>
        <div className="divContent"><b>Title : </b>{book.title}</div>
        <div className="divContent"><b>Author : </b>{book.author}</div>
        <div className="divContent"><b>Rating : </b>{book.rating}</div>
        <div className="divContent"><b>Price : </b>{book.price}</div>
        <p><b>Description : </b>{book.description}</p> 
        {/* <div><button>Delete this Book</button></div> */}
        <button className="btn btn-danger btn-sm rounded-0" onClick={()=> deleteThisBook(book._id)}>Delete this Book</button>
    </div>)
}

export default PerticularBookDetails;