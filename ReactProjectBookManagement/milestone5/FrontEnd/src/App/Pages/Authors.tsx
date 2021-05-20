import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { BooksContext } from "../../Providers/books/books.provider"

const AuthorList = () => {

    const { books } = useContext(BooksContext)

    const allAuthors = books.map((book: any) => {
        return (book.author)
    })

    const authors = allAuthors.filter((author: any, index: Number) => {

        if ((allAuthors.indexOf(author) === index)) {
            return author
        }
    })


    return (<div>
        <h2>Auhtors List</h2>
        <div className="container list-group col-3 ">
            <div className="list-group " id="list-tab" role="tablist">
                {
                    authors.map((author: any) => (
                        <a href="#" className="list-group-item-action m-2 list-group-item ">{author}</a>
                    ))
                }
            </div>
        </div>
    </div>)
}

export default AuthorList;