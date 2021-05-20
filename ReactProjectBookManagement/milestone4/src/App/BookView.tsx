import React from "react";

const BookView = (props:any)=>{
    return(<>
        <div className="bookView">
            <div><img src={props.book.cover} className="cover-img" width="100px" height="150px"></img></div>
            <div><b>title :</b> {props.book.title}</div>
            <div><b>author :</b> {props.book.author}</div>
            <div><b>price :</b> {props.book.price}</div>
        </div>
    </>)
}

export default BookView