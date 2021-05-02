// implement MovieCard component here

import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { movie } = props;
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div>
      <img src={ imagePath } alt="Movie" />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <Rating rating={ rating } />
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
