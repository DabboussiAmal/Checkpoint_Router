import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css'

const MoviesList = ({data,title,rate}) => {
  return (
    <div className='my-list'>
        {
            data
            .filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase()) && movie.rating>=rate)
            .map((movie ,index)=><MovieCard movie ={movie} key={index}/>)
         }
    </div>
  )
}

export default MoviesList