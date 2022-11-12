import tmdbApi from '../Api/tmdbapi';
import apiConfig from '../Api/ApiConfig';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router'

import React from 'react'

const Cast= props=> {
    const {category}=useParams();
    const [casts, setcasts] = useState([]);

    useEffect(() => {
       const getCast=async()=>{
        const res=await tmdbApi.credits(category,props.id);
        setcasts(res.cast.slice(0,6));
        console.log(res);
       } 
       getCast()
    }, [category,props.id]);
  return (
    <div className='casts'>
{
    casts.map((item,i)=>(
        <div className="casts__item" key={i}>
            <div className="casts__item__img" 
            style={{backgroundImage:`url(${apiConfig.w500Img(item.profile_path)})`}}></div>
            <p className='casts__item__name'>{item.name}</p>
        </div>
    ))
}
    </div>
  )
}

export default Cast