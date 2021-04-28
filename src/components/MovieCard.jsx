import React from 'react';
import Rating from './Rating';

export default function MovieCard(prop) {
  const { title, subtitle, storyline, rating, imagePath } = prop;
  return (
    <div>
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <Rating rating={ rating } />
      <img src={ imagePath } alt="" />
    </div>
  );
}
