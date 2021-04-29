import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(prop) {
  const { movie: { title, subtitle, storyline, imagePath, rating } } = prop;
  return (
    <div className="movie-card">
      <div className="movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt="imagem do filme" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } />
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number,
      imagePath: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default MovieCard;
