import React from 'react'
import Button from '../Button/Button'
import tmdbApi,{category} from '../../Api/tmdbapi'
import apiConfig from '../../Api/ApiConfig'
import './MovieList.css'
import PropTypes from 'prop-types'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState ,useEffect } from 'react'
import Card from '../Card/Card'
import MovieCard from '../MovieCard/MovieCard'

const MovieList=props=> {
    console.log("Props");
    const [items, setitems] = useState([]);
    useEffect(() => {
     const getList=async ()=>{
        let response=null;
        const params={};
        if(props.type !=='similar'){
            switch(props.category){
                case category.movie:
                    response=await tmdbApi.getMovieList(props.type,{params});
                    break;
                default:
                    response=await tmdbApi.getTvList(props.type,{params});
           }
        }else{
            response=await tmdbApi.similar(props.category,props.id);
        }
        setitems(response.results);
     }
     getList();
     
    }, []);
  return (
    <div>
        <div className="movie__list">
            <div className="list__cards">
                {
                    items.map(movie => (
                        <Card movie={movie} category={props.category}/>
                 ))
                }
            </div>
</div>
</div>   
  )
}

MovieList.propTypes={
    category:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired
}
export default MovieList