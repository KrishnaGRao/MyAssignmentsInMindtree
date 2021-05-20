import React, { useState } from "react";
import { Link, NavLink, useHistory } from 'react-router-dom'

const Navbar = () => {

    const [searchBox,setSearchBox] = useState("")
    let history = useHistory();

    const onInputChange = (e:any)=>{
        // console.log(e.target.value);
        setSearchBox(e.target.value)        
    }

    const searchBook = (e:any) =>{
        e.preventDefault();

        let searchBy = (document.getElementById("seacrhBy") as HTMLInputElement ).value;
        console.log("search By : ", searchBy)
        console.log("search with ",searchBox)
        
        history.push(`/books/${searchBy}=${searchBox}`)
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
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/bookAdd">Add Book</NavLink>
                    </li>
                    <li className="nav-item mr-l">
                        <NavLink className="nav-link" exact to="/login"> Login </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/register">Sign Up</NavLink>
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar;