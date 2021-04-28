// implement MovieCard component here
import React from 'react';
import Rating from './Rating'

function MovieCard(props) {

  const { title, subtitle, storyline, imagePath, rating } = props.movies;

  return (
    <section>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <img src={imagePath} alt='Capa do filme'/>
      <Rating nota={rating}/>
    </section>
  )
}

export default MovieCard;