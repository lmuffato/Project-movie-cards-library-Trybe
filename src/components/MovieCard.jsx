import React from 'react';
import Rating from './Rating';
import './MovieCard.css';

export default function MovieCard(prop) {
  const { movie } = prop;
  const { imagePath, title, subtitle, storyline, rating } = movie;
  return (
    <div className="movie-card">
      <img src={ imagePath } alt={ `Imagem de ${title}` } />
      <div className="textContent">
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    </div>
  );
}
