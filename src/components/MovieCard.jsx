import React from 'react';
import Rating from './Rating';

function MovieCard({ movie: { title, subtitle, storyline, imagePath, rating } }) {
  return (
    <div>
      <img src={imagePath} alt="" />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={rating} />
    </div>
  );
}

export default MovieCard;
