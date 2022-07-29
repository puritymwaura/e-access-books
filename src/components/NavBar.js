import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <div className="navbar">
                <p>Learn Always</p>
                <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/books">
                    Books
                </NavLink>
            </div>
        </div>
    )
}
export default NavBar;