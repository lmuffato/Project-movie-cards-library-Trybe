import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default function MovieCard({
  movie: { title, subtitle, storyline, imagePath, rating },
}) {
  return (
    <div className="movie-card">
      <img
        className="movie-card-image"
        src={ imagePath }
        alt={ `${title} movie card` }
      />
      <h4 className="movie-card-title">{title}</h4>
      <h5 className="movie-card-subtitle">{subtitle}</h5>
      <p className="movie-card-storyline">{storyline}</p>
      <div className="movie-card-rating">
        <Rating rating={ rating } />
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
};
