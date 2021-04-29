import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const MovieCard = ({ movie }) => {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <img src={ imagePath } alt="Capa do filme" />
      <Rating rating={ rating } />
    </div>
  );
};

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
