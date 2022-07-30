import axios from "axios";
import React, {useEffect, useState} from "react";
import Card from './Card';

function Main(){
    const [bookData, setData] = useState([]);
    const [search, setSearch] = useState("");

    function handleSearch(e){
        setSearch(e.target.value)
    }

    useEffect(()=>{
        fetch('http://localhost:3004/books')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);
    const booksfiltered = bookData.filter((book)=>book.volumeInfo.title.toLowerCase().includes(search.toLowerCase()));
    return(
        <div>
            <div className="header">
                <div className="row1">
                    <h1>There's no limit to knowledge gaining <br />Grab a Book Now and Read</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter your Book Name" value={search} onChange={handleSearch} />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src ="./images/bg2.png" alt=" " />
                </div>
            </div>

            <div className="container">
                {
                    <Card book={booksfiltered}  />
                }
            </div>
        </div>
    )
}

export default Main;
