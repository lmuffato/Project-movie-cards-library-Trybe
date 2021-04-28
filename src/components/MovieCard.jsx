import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-card-body">
        <img className="movie-card-image" src={ movie.imagePath } alt="" />
        <h4 className="movie-card-title">{ movie.title }</h4>
        <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
        <p className="movie-card-storyline">{ movie.storyline }</p>
        <Rating className="movie-card-rating" rating={ movie.rating } />
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf([PropTypes.string, PropTypes.number]).isRequired,
};

export default MovieCard;
