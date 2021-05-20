import React, { useContext, useState } from "react";
import { Link, NavLink, useHistory } from 'react-router-dom'
import { BooksContext } from "../../Providers/books/books.provider";

const Navbar = () => {

    const [searchBox, setSearchBox] = useState("")
    const [searchBy, setSearchBy] = useState("")
    const { searchBook, authUser, logout } = useContext(BooksContext);
    let history = useHistory();

    // const searchBook = (e: any) => {
    //     e.preventDefault();

    //     let searchBy = (document.getElementById("seacrhBy") as HTMLInputElement).value;
    //     console.log("search By : ", searchBy)
    //     console.log("search with ", searchBox)

    //     history.push(`/books/${searchBy}=${searchBox}`)
    // }

    const sBook = (e: any) => {
        e.preventDefault();
        searchBook(searchBy, searchBox)
        history.push("/")
    }

    const onInputChange = (e: any) => {
        // setSearchBox(e.target.value)
        // setSearchBy((document.getElementById("searchBy")).value)
        setSearchBox(e.target.value);
        let doc = (document.getElementById("searchBy") as HTMLInputElement).value
        setSearchBy(doc);
        console.log("searched by :  " + searchBy)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <a className="navbar-brand" href="#">BMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/"> Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/authors">Author</NavLink>
                    </li>

                    {authUser ?
                        (<>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/bookAdd">Add Book</NavLink>
                            </li>
                            <button className="btn bg-transparent text-primary" onClick={e => logout(e)}>Logout</button>
                        </>)
                        :
                        (<><li className="nav-item mr-l">
                            <NavLink className="nav-link" exact to="/login"> Login </NavLink>
                        </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/register">Sign Up</NavLink>
                            </li>
                        </>)
                    }

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <select name="searchBy" id="searchBy" className="btn btn-primary dropdown-toggle">
                        <option value="id">ID</option>
                        <option value="title">title</option>
                        <option value="author">author</option>
                        <option value="rating">rating</option>
                        <option value="price">price</option>
                    </select>
                    <input className="form-control mr-sm-2" onChange={e => onInputChange(e)} type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={e => sBook(e)} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

            </div>
        </nav>
    )
}

export default Navbar;