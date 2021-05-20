import React from "react";
import "./HeaderBMS.css"
import MenuItems from "./menuItem/MenuItem"
import Navbar from "./Navbar";


function HeaderBMS(){
    return(<div className="header">
        <h1>Book Management System</h1>
        {/* <div><MenuItems /></div> */}
        <Navbar />
    </div>) 
}

export default HeaderBMS;