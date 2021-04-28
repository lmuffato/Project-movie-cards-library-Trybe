// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movieData }) => (
  <div>
    <p>
      {movieData.title}
    </p>
  </div>
);

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
