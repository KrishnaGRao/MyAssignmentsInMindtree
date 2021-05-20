import React, { createContext, useReducer } from 'react';
import bookReducer, { BOOK_INITIAL_STATE } from './books.reducer'
import booksTypes from './books.types';
import {loadSearchedBooks} from "../../services/api-calls"


export const BooksContext = createContext()         //{...BOOK_INITIAL_STATE,}

const BooksProvider = ({ children }) => {
    const [store, dispatch] = useReducer(bookReducer, BOOK_INITIAL_STATE)
    const { books, searchedBook, toggleWhenBookSearched, users, authUser } = store;

    // const createBook = book => {
    //     dispatch({
    //         type: booksTypes.CREATE_BOOK,
    //         payload: book
    //     })
    // }

    const searchBook = (searchBy, searchBox) => {
        console.log("search By : ", searchBy)
        console.log("search with ", searchBox)
        let sBook = "";
        let uri = "http://localhost:3003/books"; 
        let newUri = ""

        if (searchBy === 'id') {
            newUri = `${uri}?${searchBox}`
            loadSearchedBooks(newUri,dispatch)
            // sBook = books.filter((b)=>b.id===searchBox)
            // console.log("searched book : ",sBook[0]);

        } else if (searchBy === 'title') {
            newUri = `${uri}?${searchBy}=${searchBox}`
            loadSearchedBooks(newUri,dispatch)
            // sBook = books.filter((b)=>b.title===searchBox)
            // console.log("searched book : ",sBook);
        } else if (searchBy === 'author') {
            newUri = `${uri}?${searchBy}=${searchBox}`
            loadSearchedBooks(newUri,dispatch)
            // sBook = books.filter((b)=>b.author===searchBox)
            // console.log("searched book : ",sBook);
        } else if (searchBy === 'rating') {
            newUri = `${uri}?${searchBy}=${searchBox}`
            loadSearchedBooks(newUri,dispatch)
            // sBook = books.filter((b)=>b.rating>=searchBox)
            // console.log("searched book : ",sBook);
        }
        else if (searchBy === 'price') {
            let lLimit = searchBox.split('/');
            newUri = `${uri}?${searchBy}=${lLimit[0]}/${lLimit[1]}`
            loadSearchedBooks(newUri,dispatch)
            // sBook = books.filter((b)=>((b.price>=lLimit[0])&&(b.price<=lLimit[1])))
            // console.log("searched book : ",sBook);
        }
        dispatch({
            type: booksTypes.TOGGLE_WHEN_BOOK_SEARCHED,
            payload: true
        })
    }

    const reloadAllBooks = () => {
        dispatch({
            type: booksTypes.TOGGLE_WHEN_BOOK_SEARCHED,
            payload: false
        })
    }

    const removeBook = bookId => {
        dispatch({
            type: booksTypes.REMOVE_BOOK,
            payload: bookId
        })
    }

    const checkLogin = (user) => {
        users.map(u => {
            if ((u.username === user.username) && (u.password === user.password)) {
                dispatch({
                    type: booksTypes.AUTH_USER,
                    payload: true
                })
            }
        })
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token")
        dispatch({
            type: booksTypes.AUTH_USER,
            payload: false
        })
    }

    return (
        <BooksContext.Provider value={{
            books,
            users,
            searchedBook,
            toggleWhenBookSearched,
            authUser,
            removeBook,
            // createBook,
            // createUser,
            searchBook,
            dispatch,
            reloadAllBooks,
            checkLogin,
            logout,
        }} >
            { children}
        </BooksContext.Provider>
    )
}

export default BooksProvider;