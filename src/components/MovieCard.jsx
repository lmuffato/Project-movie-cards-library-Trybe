// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

function MovieCard({ movie }) {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div>
      <img src={ imagePath } alt="Imagem Filme" />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={ rating } />
    </div>
  );
}

export default MovieCard;
