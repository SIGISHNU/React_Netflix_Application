import React,{useEffect,useState} from 'react'
import {API_KEY,imageUrl} from '../../Constant/Constants'
import axios from '../../axios'
import "./Banner.css"
function Banner() {

    const [banner, setBanner] = useState(0)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[1]);
            
            setBanner(response.data.results[Math.floor(Math.random() * response.data.results.length)])
        })
        
    }, [])
    return (
        
        <div style={{backgroundImage:`url(${ banner ? imageUrl+banner.backdrop_path : ""})`}}
        className="banner">
            <div className="content">
                <h1 className="title">{banner ? banner.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{banner ? banner.overview : ""}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
