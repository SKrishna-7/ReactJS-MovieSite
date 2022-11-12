import React from 'react'
import { Link } from 'react-router-dom'
import Heroslide from '../Components/Heroslide/Heroslide'
import { OutlineButton } from '../Components/Button/Button'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { category,movieType, tvType } from '../Api/tmdbapi'
import MovieList from '../Components/MovieList/MovieList'
import './Home.css';
function Home() {
  return (
    <>
    <Heroslide/>
    <div className="Home">
      <div className="section">
        <h2>Trending Movies</h2>
        <Link to='/movie'>
            <OutlineButton className='small'>View More</OutlineButton>
        </Link>
        </div>
      <MovieList category={category.movie} type={movieType.popular}/>
    </div>
    
    <div className="Home">
      <div className="section">
        <h2>Top Rated Movies</h2>
        <Link to='/movie'>
        <OutlineButton className='small' >View More</OutlineButton>
        </Link>
        </div>
      <MovieList category={category.movie} type={movieType.top_rated}/>
    </div>

    <div className="Home">
      <div className="section">
        <h2>Trending Tv Series</h2>
        <Link to='/tv'>
            <OutlineButton className='small'>View More</OutlineButton>
        </Link>
        </div>
      <MovieList category={category.tv} type={tvType.popular}/>
    </div>

    <div className="Home">
      <div className="section">
        <h2>TopRated Tv</h2>
        <Link to='/tv'>

        <OutlineButton className='small'>View More</OutlineButton>
        </Link>
        </div>
      <MovieList category={category.tv} type={tvType.top_rated}/>
    </div>

    </>
  )
}

export default Home