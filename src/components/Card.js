import React from "react";

function Card(){
    return(
        <div>
            <div className="card">
                <img src="./images/book.png" alt=" " />
                <div className="bottom">
                    <h3 className="title">React Js</h3>
                    <p className="amount">&#36;2290</p>
                </div>
            </div>
        </div>
    )
}

export default Card;