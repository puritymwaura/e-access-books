import React from "react";
import LogIn from "./LogIn";
import Link from 'react-dom'
// import Main from "./Main";

function Welcome(){
    return(
        <div>
            <div className="welcome container-fluid">
                <div className="welcomeText">
                    <h1>Come and Learn <br /> and <br />Make sure You grab a book</h1>
                </div>
                <div className="getstarted">
                    <h2>Learn Now and Master Your Art</h2>
                    <img src="./images/glasses-1052010_1920.jpg" alt=" " />
                    <Link to="">
                        <p><button id="btn">Read Books</button></p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Welcome;