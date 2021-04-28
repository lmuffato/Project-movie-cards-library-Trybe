import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
  const { title, subtitle, storyline, imagePath, rating } = props;
  return (
    <section key={ title } className="movie-card">
      <img src={ imagePath } alt={ `${title}` } className="movie-card-image" />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <Rating rating={ rating } />
    </section>
  );
}

export default MovieCard;
