import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl, API_KEY } from '../../Constant/Constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.urls).then(response => {
            console.log(response.data.results);
            setMovies(response.data.results)
        })

    }, [])

    const handleMovieClick = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else if(response.data.results.length === 0){
                alert("Trailer not available !")
            }else{
                alert("Trailer not available !")
            }
        })

    }

    const opts = {
        height: '420',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>

                    <img onClick={() => handleMovieClick(obj.id)} className={props.isSmall ? "smallCads" : "cards"} alt="cards" src={`${imageUrl + obj.backdrop_path}`} />
                )}
                
            </div>
            <br/><br/>
           {urlId && <YouTube videoId={urlId.key} opts={opts} /> }
           <br/>
        </div>
    )
}

export default RowPost
