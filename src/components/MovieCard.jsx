import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={ movie.imagePath } alt={ `foto ${movie.title}` } />
      <h2>{ movie.title }</h2>
      <h3>{ movie.subtitle }</h3>
      <p>{ movie.storyline }</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
