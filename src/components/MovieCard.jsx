// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard({ movie }) {
  const { imagePath, title, subtitle, storyline, rating } = movie;
  return (
    <div className="movie-card">
      <img className="image" src={ imagePath } alt="Imagem da capa do Filme " />
      <h4 className="title">{title}</h4>
      <h5 className="subtitle">{subtitle}</h5>
      <p className="story-line">{storyline}</p>
      <Rating rating={ rating } />
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
