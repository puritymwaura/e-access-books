import React, { useState } from "react"

function Card({book}){
    
    return(
        <div class="row mt-2 g-1 container-fluid">
            {
                book.map((item)=>{
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice;
                    if(thumbnail!=undefined)
                    {
                        return(
                            // <div class="col-md-3">
                            //     <div class="card p-2">
                            //         <div class="text-center mt-2 p-3"> <img src={thumbnail} width="250" height="200"/> <h3 class="d-block font-weight-bold">{item.volumeInfo.title}</h3>
                            //          <div class="d-flex justify-content-between mt-3"> <span>{amount}</span> <button class="btn btn-sm btn-outline-dark" style={{color: "red"}}>Buy House</button> </div>
                            //     </div>
                            //     </div>
           
                            // </div>
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