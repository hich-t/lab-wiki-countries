import React from "react";
import {Link} from "react-router-dom"


const NavBar = () => {

return (

<div className="Navbar">
<h1>Lab - WikiCountries</h1>
<Link className="Nav"
    to='/'>  
    Return to Home
    </Link>


</div>    
)
}

export default NavBar