import React from "react";
import Card from "./Card";

function Main(){
    return(
        <div>
           <div className="header">
            <div className="row1">
                <h1>There's no limit to knowledge gaining <br />Grab a Book Now and Read</h1>
            </div>
            <div className="row2">
                <h2>Find Your Book</h2>
                <div className="search">
                    <input type="text" placeholder="Enter The Book's Name" />
                    <button><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <img src="./images/bg2.png" alt=" " />
            </div>
           </div> 

           <div className="container">
            <Card />
           </div>
        </div>
    )
}

export default Main;