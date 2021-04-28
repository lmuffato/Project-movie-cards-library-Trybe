// implement MovieCard component here
import React from 'react';

function MovieCard(props) {

  const { title, subtitle, storyline, imagePath, rating } = props.movies;

  return (
    <section>
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <p>{storyline}</p>
      <img src={imagePath} alt='Capa do filme'/>
      <p>{rating}</p>
    </section>
  )
}

export default MovieCard;