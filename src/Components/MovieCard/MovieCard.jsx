import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';
import tmdbApi,{category} from '../../Api/tmdbapi'
import apiConfig from '../../Api/ApiConfig'
const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Img(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;