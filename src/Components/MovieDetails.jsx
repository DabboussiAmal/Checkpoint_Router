import React from 'react'
import { useState ,useEffect } from 'react'
import MoviesData from './MovieData/Data'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [movie,setMovie] =useState({})
  const params=useParams()
  const navigate = useNavigate()
  useEffect(()=>{
     setMovie(MoviesData.find(movie=>movie.id === params.id))
  },[params.id])
  return (
    <div>
      <h1 style={{fontSize:'50px' }}>Movie Details</h1>
      <h2>{movie.title}</h2>
      <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <br/>
      <button style={{marginTop:'25px',marginLeft:'auto',marginRight:'auto'}} onClick={()=>navigate('/')}>Go Home</button>

    </div>
  )
}

export default MovieDetails