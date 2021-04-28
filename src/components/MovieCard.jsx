import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard({ movie }) {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={ rating } />
      <img src={ imagePath } alt="Imagem Do Filme" />
    </div>
  );
}

PropTypes.shape({ root: PropTypes.string.isRequired });

// Proptypes Source: https://www.youtube.com/watch?v=ldhZ2L3XYis

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
