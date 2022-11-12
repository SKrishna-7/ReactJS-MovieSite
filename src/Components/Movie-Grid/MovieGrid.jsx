import React, { useCallback } from 'react'
import './MovieGrid.scss';
import { useEffect,useState } from 'react';
import Card from '../Card/Card';
import { useHistory, useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../Api/tmdbapi';
import MovieCard from '../MovieCard/MovieCard';
import Button, { OutlineButton } from '../Button/Button';
import Input from '../Input/Input';
 
const MovieGrid=props=> {
  const [items, setitems] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpage, settotalpage] = useState(0);
  const {keyword}=useParams();
  
  useEffect(() => {
   const getList=async ()=>{
    let response=null;
    if (keyword === undefined){
      const params={};
      switch(props.category){
        case category.movie:
          response=await tmdbApi.getMovieList(movieType.upcoming,{params});
          break;
        default:
          response=await tmdbApi.getTvList(tvType.popular,{params});
      }
    }else{
      const params={
        query:keyword
      }
      response=await tmdbApi.search(props.category,{params} );

    }
    setitems(response.results);
    settotalpage(response.total_pages);

    // console.log(items)
   }
   getList();
  }, [props.category,keyword]);

const loadMore=async()=>{
  let response=null;
  if(keyword===undefined){
    const params={
      page:page+1
    };
    switch(props.category){
      case category.movie:
        response=await tmdbApi.getMovieList(movieType.upcoming,{params});
        break;
      default:
        response=await tmdbApi.getTvList(tvType.popular,{params});
    }
  }else{
    const params={
      page:page+1,
      query:keyword
    }
    response=await tmdbApi.search(props.category,{params} );

  }
  setitems([...items, ...response.results]);
  setpage(page+1);
  }

  return (
   <>
   <div className="section mb-3">
    <MovieSearch category={props.category} keyword={keyword}/>
   </div>
    <div className="moviegrid ">
      {
        items.map((item,i)=><Card movie={item} category={props.category} key={i}/>)
      }
    </div>

    {
     
      page < totalpage ?(
        <div className="movie-grid__loadmore">
          <OutlineButton className='small' onClick={loadMore}>LoadMore</OutlineButton>
        </div>
      ):null
  } 
</>
);
}
const MovieSearch=props=>{
  const history=useHistory();
  const [keyword, setKeyword] = useState(props.keyword?props.keyword :'');

  const goToSearch=useCallback(
    ()=>{
      if(keyword.trim().length>0){
        history.push(`${category[props.category]}/search/${keyword}`);
      }
    },
    [keyword,props.category,history]
  );
  useEffect(() => {
    const enterEvent=(e)=>{
      e.preventDefault();
      if(e.keyCode===13){
        goToSearch();
      }
    }
    document.addEventListener('keyup',enterEvent);
    return () => {
    document.removeEventListener('keyup',enterEvent);
      
    };
  }, [keyword,goToSearch]);

  return(
    <div className="movie-search">
      <Input 
      type='text'
      placeholder="Enter Keyword"
      value={keyword}
      onChange={(e)=>setKeyword(e.target.value)}/>
     <button className='bsmall' onClick={goToSearch}>Search</button>
    </div>

  )
}


export default MovieGrid;