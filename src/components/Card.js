import React from "react"

function Card({book}){
    console.log(book);
    return(
        <div>
            {
                book.map((item)=>{
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!=undefined)
                    {
                        return(
                            <div>
                                <div className="card">
                                    <img src={thumbnail} alt=" " />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <p>&#36;{amount}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
            
        </div>
    )
}

export default Card;