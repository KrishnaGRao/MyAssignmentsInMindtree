import React, { useEffect, useState } from "react"
import axios from "axios";
import BookView from "../BookView";
import { Link, useHistory } from "react-router-dom";
import PerticularBookDetails from "../perticular-book-details";


export default function BookList(params) {
    const [books, setBook] = useState([]);
    let [searchBox, setSearchBox] = useState("")
    let [searchBy, setSearchBy] = useState("")
    const [isToggled, setIsToggled] = useState(false);
    const [searchedBook, setSearchedBook] = useState([])
    let uri = "http://localhost:3003/books";
    let newUri = ""

    useEffect(() => {
        loadBooks();
    }, [])

    const history = useHistory()


    const loadBooks = async () => {
        const result = await axios.get("http://localhost:3003/books?all");
        setBook(result.data)
    }

    const loadSearchedBooks = async (newUri) => {
        
        console.log("new uri is ", newUri);
        const result = await axios.get(`${newUri}`);
        // console.log("new Books after searched "+JSON.stringify(result));
        setSearchedBook(result.data)
        // console.log("new Books after searched "+JSON.stringify(searchedBook));
    }

    const perticularBookClicked = (book) => {
        console.log("you clicked on perticular book");
        <PerticularBookDetails book={book} />
    }

    const autoCall = (book) => {
        history.push(`/perticularBookDetails/${book._id}`)
    }

    const searchBook = (e) => {
        e.preventDefault();
        setIsToggled(true)
        console.log("search By : ", searchBy)
        console.log("search with ", searchBox)

        if (searchBy === 'id') {
            newUri = `${uri}?${searchBox}`
            loadSearchedBooks(newUri)
        } else if (searchBy === 'title') {
            newUri = `${uri}?${searchBy}=${searchBox}`
            loadSearchedBooks(newUri)
        } else if (searchBy === 'author') {
            newUri = `${uri}?${searchBy}=${searchBox}`
            loadSearchedBooks(newUri)
        } else if (searchBy === 'rating') {
            newUri = `${uri}?${searchBy}=${searchBox}`
            loadSearchedBooks(newUri)
        }
        else if (searchBy === 'price') {
            let lLimit = searchBox.split('/');
            newUri = `${uri}?${searchBy}=${lLimit[0]}/${lLimit[1]}`
            loadSearchedBooks(newUri)
        }
    }


    const onInputChange = (e) => {
        setSearchBox(e.target.value)
        setSearchBy((document.getElementById("seacrhBy")).value)
    }

    return (<>
        <form className="form-inline my-2 my-lg-0">
            <select name="searchBy" id="seacrhBy" className="btn btn-primary dropdown-toggle">
                <option value="id">ID</option>
                <option value="title">title</option>
                <option value="author">author</option>
                <option value="rating">rating</option>
                <option value="price">price</option>
            </select>
            <input className="form-control mr-sm-2" onChange={e => onInputChange(e)} type="search" placeholder="Search" aria-label="Search" />
            <button onClick={e => searchBook(e)} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

        {isToggled ?

            <div>
                {   searchedBook.length>0? (searchedBook.length>1?
                    (
                    searchedBook.map((sbook, index) => (
                        <Link to={`/perticularBookDetails/${sbook.id}`}>
                            <div className="bookViewGrid" key={index} onClick={() => perticularBookClicked(sbook)}>
                                <BookView book={sbook} />
                            </div>
                        </Link>
                    ))): autoCall(searchedBook[0])):(<h2>No book found</h2>)
                }
            </div>

            :

            <>
                <h2 className="text-primary">Welcome to Book World</h2>
                <div className="container m-5">
                    {
                        books.map((book, index) => (
                            <Link to={`/perticularBookDetails/${book._id}`}>
                                <div className="bookViewGrid" key={index} onClick={() => perticularBookClicked(book)}>
                                    <BookView book={book} />
                                </div>
                            </Link>
                        ))

                    }</div></>
        }
    </>)
}
