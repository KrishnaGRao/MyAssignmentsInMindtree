import React from "react";
import "./menuItem.css"

function MenuItems(){
    const home:String = "Home"
    return(
        <>
        <a href= "#" className="Danger">{home}</a>
        <a href= "#" >Books</a>
        <a href= "#" >Search</a>
        <a href= "#" >Add Books</a> 
        </>
    )
}

export default MenuItems;