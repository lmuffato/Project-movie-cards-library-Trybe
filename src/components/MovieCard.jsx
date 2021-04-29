import React from 'react';
import '../App.css';

function MovieCard(prop) {
  const { movie } = prop;
  const { title, subtitle, storyline, rating, imagePath } = movie;

  return (
    <section className="movie-card">
      <img className="movie-card-image" src={ imagePath } alt={ `${title} Card` } />
      <h4 className="movie-card-title">{title}</h4>
      <h5 className="movie-card-subtitle">{subtitle}</h5>
      <p className="movie-card-storyline">{storyline}</p>
      <span className="rating">{rating}</span>
    </section>
  );
}

export default MovieCard;
