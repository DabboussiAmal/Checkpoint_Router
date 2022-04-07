import React from 'react'
import './MovieCard.css'
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className='my-card'>
      <Link to={`/movie/${movie.id}`} >
       <img src={movie.posterURL} alt="" style={{ width:'200px'}}/>
      </Link>
       
      
      <h3>{movie.title}</h3> 
      <h5 >{movie.description}</h5>
      <h2>{"⭐".repeat(movie.rating)}</h2>

    </div>
  )
}

export default MovieCard