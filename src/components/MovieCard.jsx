import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard({
  movie: { title, subtitle, storyline, imagePath, rating },
}) {
  return (
    <>
      <img src={ imagePath } alt="FilmCardImg" />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={ rating } />
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired }).isRequired,
};

export default MovieCard;

// https://pt-br.reactjs.org/docs/fragments.html
