import React from 'react';

function MovieCard(props) {
  return (
    <>
      <img src={ props.movieProp.imagePath } alt='Movie Card'></img>
      <h4>{ props.movieProp.title }</h4>
    </>
  );
}

export default MovieCard;
