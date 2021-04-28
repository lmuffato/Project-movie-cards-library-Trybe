import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  return (
    <>
      <img src={ props.movieProp.imagePath } alt='Movie Card'></img>
      <h4>{ props.movieProp.title }</h4>
      <h5>{ props.movieProp.subtitle }</h5>
      <p>{ props.movieProp.storyline }</p>
      <Rating rating={ props.movieProp.rating } />
    </>
  );
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
