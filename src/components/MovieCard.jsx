import React from 'react';
import Rating from './Rating';

function MovieCard(prop) {
  const { movie: { title, subtitle, storyline, imagePath, rating } } = prop;
  return (
    <div>
      <img src={ imagePath } alt="imagem do filme" />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={ rating } />
    </div>
  );
}

export default MovieCard;
