import React from "react";
// import LogIn from "./LogIn";
// import { NavLink } from "react-router-dom";
// import Main from "./Main";
// import { Route } from "react-router-dom";

function Welcome(){
    return(
        <div>
            <div className="welcome">
                <div className="welcomeText">
                    <h1>Come and Learn <br /> and <br />Make sure You grab a book</h1>
                </div>
                <div className="getstarted">
                    <h2>Learn Now and Master Your Art</h2>
                    <img src="./images/glasses-1052010_1920.jpg" alt=" " />
                    <p><button id="btn">Read Books</button></p>
                </div>
            </div>

        </div>
    )
}

export default Welcome;