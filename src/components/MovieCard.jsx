import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default function MovieCard({ movie }) {
  const { title, subtitle, storyline, rating, imagePath } = movie;
  return (
    <section className="movie-card">
      <section className="movie-card-body">
        <img src={ imagePath } alt="" className="movie-card-image image" />
        <h4 className="title movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </section>
      <Rating rating={ rating } />
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
};
