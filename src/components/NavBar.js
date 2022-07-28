import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <div className="Navbar">
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/books">
                    Books
                </NavLink>
                <p>Learn and be a Master of Educational Art</p>
            </div>
        </div>
    )
}
export default NavBar;