import React, { useEffect, useState, useContext } from "react"
import axios from "axios";
import BookView from "../BookView";
import { Link, useHistory } from "react-router-dom";
import PerticularBookDetails from "../perticular-book-details";
import { BooksContext } from "../../Providers/books/books.provider"

export default function BookList(params) {
    // const [books, setBook] = useState([]);

    // let searchBox = ""
    // let searchBy = ""
    // const [isToggled, setIsToggled] = useState(false);
    // const [searchedBook, setSearchedBook] = useState([])
    // let uri = "http://localhost:3003/books"; 
    // let newUri = ""  

    const { books, searchedBook, toggleWhenBookSearched, searchBook, reloadAllBooks } = useContext(BooksContext);

    // useEffect(() => {
    //     loadBooks();
    // }, [])

    const history = useHistory()


    // const loadBooks = async () => {
    //     const result = await axios.get("http://localhost:3003/books?all");
    //     setBook(result.data)
    // }

    const loadSearchedBooks = async (newUri) => {

        console.log("new uri is ", newUri);
        const result = await axios.get(`${newUri}`);
        searchedBook = result.data
    }

    const perticularBookClicked = (book) => {
        console.log("you clicked on perticular book");
        <PerticularBookDetails book={book} />
    }

    const autoCall = (book) => {
        history.push(`/perticularBookDetails/${book.aid}`)
    }


    const reloadBooks = (e) => {
        e.preventDefault();
        reloadAllBooks();
    }


    console.log("toggleWhenBookSearched is ", toggleWhenBookSearched);
    console.log("searched book is ", searchedBook);
    console.log("");

    return (<>

        {toggleWhenBookSearched ?
            <>
                <button onClick={e => reloadBooks(e)} className="btn btn-outline-primary my-2 my-sm-0">Reload Books</button>
                <div className="container m-5">
                    {searchedBook.length > 0 ? (searchedBook.length > 1 ?
                        (
                            searchedBook.map((sbook, index) => (
                                <Link to={`/perticularBookDetails/${sbook.id}`}>
                                    <div className="bookViewGrid" key={index} onClick={() => perticularBookClicked(sbook)}>
                                        <BookView book={sbook} />
                                    </div>
                                </Link>
                            ))) : autoCall(searchedBook[0])) : (<h2>No book found</h2>)
                    }
                </div>
            </>

            :

            <>
                <h2 className="text-primary">Welcome to Book World</h2>
                <div className="container m-5">
                    {
                        books.map((book, index) => (        //books.map((book, index) => (
                            <Link to={`/perticularBookDetails/${book.id}`}>
                                <div className="bookViewGrid" key={index} onClick={() => perticularBookClicked(book)}>
                                    <BookView book={book} />
                                </div>
                            </Link>
                        ))

                    }</div></>
        }
    </>)
}
