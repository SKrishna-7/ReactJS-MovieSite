import React from 'react'
import Skeleton ,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect ,useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import tmdbApi,{category as cate} from '../../Api/tmdbapi'
import apiConfig from '../../Api/ApiConfig'
function Card({movie,category}) {
    // console.log("CARD"+cate[category]);
    console.log(movie);
    const [isLoading,setisLoading]=useState(true)
    useEffect(() => {
    setTimeout(()=>{
        setisLoading(false)
    },1500)   
    }, [movie,category]);
  const pathLink='/'+cate[category]+'/'+movie.id;
//   console.log(Link);
    return (
  <>{
              isLoading
        ?
        <div className='card'>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
            <div className='cards' style={{width:'200px'}}>
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path||movie.backdrop_path:""}`} />
                <div className='cards__overlay'>
            <Link to={pathLink} style={{textDecoration:"none", color:"white"}}>
                    <div className="card__title">{movie?movie.title||movie.name:""}</div>
            </Link>
                    <div className="card__runtime">
                        {movie?movie.release_date||movie.first_air_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
}
  </>
  )
}

export default Card