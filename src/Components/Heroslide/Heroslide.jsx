import React ,{useEffect,useState} from 'react'
import tmdbApi,{category,movieType} from '../../Api/tmdbapi'
import './Heroslide.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
function Heroslide() {

  const [movieItems, setmovieItems] = useState([]);
  useEffect(() => {
    const getMovies=async ()=>{
        const params={page:1}
    try{
        const response=await tmdbApi.getMovieList(movieType.popular,{params});
        setmovieItems(response.results.slice(0,10));
        console.log(movieItems);
    }catch{
        console.log('error');
    }
    }
    getMovies();
   
  }, []);
    return (
  <div className="poster">
    <Carousel showThumbs={false} autoPlay={true}
      transitionTime={3} infiniteLoop={true} showStatus={false} >
    {
      movieItems.map(movie=>(
      <Link to={`/movie/${movie.id}`} >
       <div className="poster_con">
          <div className="posterimg">
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Poster" />
          </div>
        <div className="poster_overlay">
         <div className="posterImg_title">{movie ? movie.original_title : ""} </div>
         <div className="posterImg_runtime">{movie? movie.release_date : ""}
            <span className="posterImg_rating">
              {movie?movie.vote_average : ""}
              <i class="fa fa-star" />{" "}
            </span>
          </div>
        <div className="posterImg_des">
          {movie ? movie.overview : ""}
        </div>   
        </div>     
        </div> 
    </Link>
        ))//--
      }
      </Carousel>
  </div>
  )
}

export default Heroslide