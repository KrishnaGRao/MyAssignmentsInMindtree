import axios from "axios";
import React from "react"
import booksTypes from "../Providers/books/books.types";

export const loadBooks = async (dispatch: any) => {
    const result = await axios.get("http://localhost:3003/books?all");

    dispatch({
        type: booksTypes.LOAD_BOOKS,
        payload: result.data
    })
}

export const loadSearchedBooks = async (newUri: any, dispatch: any) => {

    console.log("new uri is ", newUri);
    const result = await axios.get(`${newUri}`);
    // searchedBook = result.data
    dispatch({
        type: booksTypes.SELECTED_BOOKS,
        payload: result.data
    })
}

export const createUser = async (user: any, dispatch: any) => {

    await axios.post("http://localhost:3003/register", user)
        .then(resp => {
            console.log(resp.data);
            dispatch({
                type: booksTypes.CREATE_USER,
                payload: user
            })
        }).catch(error => {
            console.log(error);
        });
}


export const createBook = async (data: any, dispatch: any) => {

    await axios.post("http://localhost:3003/books", data)
        .then(resp => {
            console.log(resp.data);
            dispatch({
                type: booksTypes.CREATE_BOOK,
                payload: data.book
            })
        }).catch(error => {
            console.log("Book is't added, session may be expired / you need to login again : ", error);
        });
}

export const checkLogin = async (user: any, dispatch: any) => {

    await axios.post("http://localhost:3003/login", user)
        .then(resp => {
            console.log(resp.data);
            console.log("token is : " + resp.data.token)
            localStorage.setItem('token', resp.data.token)
            if (resp.data.status === 'ok') {
                dispatch({
                    type: booksTypes.AUTH_USER,
                    payload: true
                })
            }
        }).catch(error => {
            console.log(error);
        });
}

export const removeBookWithApiCall = async (id: any) => {
    const token = localStorage.getItem('token')
    if (token)
        console.log('id is = ', id);
        
        await axios.delete(`http://localhost:3003/books/${id}`, { headers: { token: token }, data: { token: token } })
        .then(resp => {
            return resp.status
        }).catch(error => {
            console.log(error);
        })
}