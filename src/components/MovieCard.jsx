import React from 'react';
import Rating from './Rating';

function MovieCard() {
  return (
    <div>
      <img src={ imagePath } alt="Titulo" />
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
      <div>
        <Rating rating={ rating } />
      </div>
    </div>
  );
}

export default MovieCard;
