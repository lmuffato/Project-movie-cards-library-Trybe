// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard({ movie }) {
  const { imagePath, title, subtitle, storyline, rating } = movie;
  return (
    <div className="movie-card">
      <div className="movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt="Imagem Filme " />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <div className="movie-card-rating"><Rating rating={ rating } /></div>
      </div>
    </div>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
