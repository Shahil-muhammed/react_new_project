import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from '../../../node_modules/react-youtube'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlid, seturlid] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setmovies(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handlemovie=(id)=>{

        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&languge=en-US`).then(response=>{
            if(response.data.results.length!==0){
                seturlid(response.data.results[0])
            }else{
                console.log("empty array")
            }
        })
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>handlemovie(obj.id)} className={props.issmall ? 'smallposter' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />


                )}
            </div>
            {urlid && <YouTube  videoId={urlid.key} opts={opts} />}
        </div>
    )
}

export default RowPost
