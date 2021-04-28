import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { title, subtitle, storyline, rating, imagePath } = props.movie;
  return (
    <div>
      <img src={ imagePath } alt={ title } />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <Rating rating={ rating } />
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
