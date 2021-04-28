// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
  return (
    <section>
      <h4>{props.movies.title}</h4>
      <h5>{props.movies.subtitle}</h5>
      <p>{props.movies.storyline}</p>
      <img src={ props.movies.imagePath } alt='Capa do filme'/>
      <Rating nota={ props.movies.rating } />
    </section>
  );
}

export default MovieCard;
