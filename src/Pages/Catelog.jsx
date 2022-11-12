import React from 'react'
import { useParams } from 'react-router'
import PageHeader from '../Components/PageHeader/PageHeader';
import { category as cate } from '../Api/tmdbapi';
import MovieGrid from '../Components/Movie-Grid/MovieGrid';

function Catelog() {
  const {category}=useParams();
  console.log(category);
  return (
    <>
    <PageHeader>
      {category === cate.movie ?'Movies' :'Tv'}
    </PageHeader>
    <div className="">
      <MovieGrid category={category}/>
    </div>
    </>
  )
}

export default Catelog