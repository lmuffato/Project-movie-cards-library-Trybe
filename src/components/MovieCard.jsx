import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { title, subtitle, storyline, imagePath } = movie;
  return (
    <div>
      <h3>{title}</h3>
      <span>{subtitle}</span>
      <p>{storyline}</p>
      <img src={ imagePath } alt="Capa do filme" />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
