import React from 'react';
import movies from '../data';

function MovieCard() {
  return (
    movies.map((data) => <p key={ data.title }>Nome:</p>));
}

export default MovieCard;
