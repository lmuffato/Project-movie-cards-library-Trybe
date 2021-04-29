// implement MovieCard component here
import React from 'react'

function MovieCard (props) {
    const { movie } = props
return (
    <section className="movie-card movie-card-body">
      <h4 className="movie-card-title">{ movie.title }</h4>
      <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
      <p className="movie-card-storyline">{ movie.storyline }</p>
      <img className="movie-card-image" src={ movie.imagePath } alt={movie.title}></img>
  </section>
)
}

export default MovieCard