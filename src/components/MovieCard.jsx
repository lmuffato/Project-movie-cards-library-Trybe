import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

const MovieCard = ({ movie }) => {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div className="movie-card movie-card-body">
      <h4 className="movie-card-title">{title}</h4>
      <h5 className="movie-card-subtitle">{subtitle}</h5>
      <p className="movie-card-storyline">{storyline}</p>
      <img className="movie-card-image" src={ imagePath } alt="Capa do filme" />
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
