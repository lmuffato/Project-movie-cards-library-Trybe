import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { movies } = props;

  return (
    <div className="movie-card">
      <img className="image" src={ movies.imagePath } alt="movieFolder" />
      <p className="title">
        {' '}
        {movies.title}
        {' '}
      </p>
      <p className="subtitle">
        {' '}
        {movies.subtitle}
        {' '}
      </p>
      <p className="story-line">
        {' '}
        {movies.storyline}
        {' '}
      </p>
      <Rating rating={ movies.rating } />
    </div>
  );
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
