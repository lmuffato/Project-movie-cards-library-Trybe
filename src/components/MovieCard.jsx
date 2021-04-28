// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => (
  <div>
    <h4>
      {movie.title}
    </h4>
    <h5>
      {movie.subtitle}
    </h5>
    <p>
      {movie.storyline}
    </p>
    <img src={ movie.imagePath } alt="Banner do filme" />
    <p>
      {movie.rating}
    </p>
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
