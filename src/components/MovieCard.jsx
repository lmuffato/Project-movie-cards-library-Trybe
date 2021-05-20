import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={ movie.imagePath } alt={ `foto ${movie.title}` } />
      <h4>{ movie.title }</h4>
      <h5>{ movie.subtitle }</h5>
      <p>{ movie.storyline }</p>
      <Rating
        rating={ movie.rating }
      />
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
