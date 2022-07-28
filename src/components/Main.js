import axios from "axios";
import React, {useState} from "react";
import Card from './Card';

function Main(){
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([])

    const searchBook=(e)=>{
        if(e.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDQSymXizemH5TzvXnWqZ3lgp1aUslCqlM'+'&maxResults=20')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <div>
            <div className="header">
                <div className="row1">
                    <h1>There's no limit to knowledge gaining <br />Grab a Book Now and Read</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter your Book Name" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src ="./images/bg2.png" alt=" " />
                </div>
            </div>

            <div className="container">
                {
                    <Card book ={bookData} />
                }
            </div>
        </div>
    )
}

export default Main;
