import React, {useState} from "react"
import Modal from "./Modal";

function Card({book}){
    const [show,setShow]= useState(false)
    const [bookItem,setItem]=useState()
    return(
        <div class="row mt-2 g-1 container-fluid">
            {
                book.map((item)=>{
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice;
                    if(thumbnail!=undefined)
                    {
                        return(
                            <div>
                                <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                    <img src={thumbnail} alt=" " />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <p className="amount">&#36;{amount}</p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={()=>setShow(false)} />
                            </div>
                        )
                    }
                })
            }
            
        </div>
    )
}

export default Card;