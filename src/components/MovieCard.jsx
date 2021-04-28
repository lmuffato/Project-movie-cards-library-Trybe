// implement MovieCard component here
import React from 'react';

function MovieCard(movie) {
  const { title } = movie;
  return (
    <h1>{ title }</h1>
  );
}

export default MovieCard;
