import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
// destruction de objeto dentro de objeto aprendido no plantao 28/04/2021 17:40 as 19:30
  const { movie: { title, subtitle, storyline, imagePath, rating } } = props;
  return (
    <section className="movie-card">
      <img src={ imagePath } alt={ title } className="movie-card-image" />
      <div className="movie-card-body ">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
      </div>
      <div className="movie-card-rating">
        <Rating rating={ rating } />
      </div>
    </section>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
