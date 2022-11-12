import React from 'react'
import { category as cate } from '../Api/tmdbapi';
import tmdbApi from '../Api/tmdbapi';
import apiConfig from '../Api/ApiConfig';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router'
import Cast from './Cast';
import './Detail.scss';

import MovieList from '../Components/MovieList/MovieList';

import VideoList from './Videos';

function Details() {
  const {category,id}=useParams();
  const [item, setitems] = useState(null);

  useEffect(() => {
    const getDetail=async ()=>{
      const response=await tmdbApi.getDetails(category,id,{params:{}});
      setitems(response)
      console.log(item);
      window.scrollTo(0,0);
    } 
    getDetail();
  }, [category,id]);
  
  return (
    <>
         {
                item && (
                  
    <>
  <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImg(item.backdrop_path || item.poster_path)})`}}></div>
      <div className="mb-3 movie-content container">
  <div className="movie-content__poster">
              <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImg(item.poster_path || item.backdrop_path)})`}}></div>
         </div>
    <div className="movie-content__info">
            <h1 className="title">
       {item.title || item.name}
  </h1>
        <div className="genres">
           {
             item.genres && item.genres.slice(0,4).map((genre, i) => (
             <span key={i} className="genres__item">{genre.name}</span>
                     ))
           }
        </div>
        <p className="overview">{item.overview}</p>
        <div className="cast">
          <div className="section__header">
            <h2>Cast</h2>
          </div>
          <Cast id={item.id} />
        </div>
   </div>
  </div>

  <div className="container">
      {/* <h2 className='section'>Trialer</h2> */}
    <div className="section mb-3">
      <VideoList id={item.id}/>
    </div>
    <div className="section ">
        <div className="section__header mt-2">
          <h2>Similar</h2>
        </div>
  </div>
        <MovieList category={category} type="similar" id={item.id}/>
  </div>
      
       </>
      )
    }
    </>
  )
}

export default Details;