import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'

function Banner() {
    const [movie, setmovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setmovie(response.data.results[0])
            console.log(response.data.results[0])
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className="Banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div classname="banner_button">
                    <button classname="buttons">play</button>
                    <button className="button"> mylist </button>
                </div>
                <h1 className="discription">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
