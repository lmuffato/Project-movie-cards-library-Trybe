import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
  return (
    <>
      <img src={ props.movieProp.imagePath } alt='Movie Card'></img>
      <h4>{ props.movieProp.title }</h4>
      <h5>{ props.movieProp.subtitle }</h5>
      <p>{ props.movieProp.storyline }</p>
      <Rating rating={ props.movieProp.rating } />
    </>
  );
}

export default MovieCard;
