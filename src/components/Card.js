import React from "react";

function Card({book}){
    console.log(book)
    return(
        <div>
        {
            book.map((item)=>{
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                return(
                    <div>
                        <div className="card">
                            <img src={thumbnail} alt=" " />
                            <div className="bottom">
                                <h3 className="title">React Js</h3>
                                <p className="amount">&#36;2290</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>    
    )
}

export default Card;