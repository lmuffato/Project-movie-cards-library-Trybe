import React from 'react';

import PropTypes from 'prop-types';

import Rating from './Rating';

function MovieCard(props) {
  const { movie: { title, subtitle, storyline, imagePath, rating } } = props;

  return (
    <div>
      <img src={ imagePath } alt={ `Movie ${title}` } />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={ rating } />
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
