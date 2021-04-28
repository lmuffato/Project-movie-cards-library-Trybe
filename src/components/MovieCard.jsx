// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const MovieCard = ({ movie }) => (
  <div className="movie-card movie-card-body">
    <h4 className="movie-card-title">
      {movie.title}
    </h4>
    <h5 className="movie-card-subtitle">
      {movie.subtitle}
    </h5>
    <p className="movie-card-storyline">
      {movie.storyline}
    </p>
    <img className="movie-card-image" src={ movie.imagePath } alt="Banner do filme" />
    <Rating className="movie-card-rating" rating={ movie.rating } />
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
