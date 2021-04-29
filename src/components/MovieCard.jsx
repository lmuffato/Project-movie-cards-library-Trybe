// implement MovieCard component here

import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
  // Requisito 6
  const { movie } = props;
  const { title, subtitle, storyline, imagePath, rating } = movie;

  return (
    <section className="movie-card">
      {/* Requisito 7 */}
      <img src={ imagePath } alt={ title } className="movie-card-image" />

      {/* Requisito 8 */}
      <h4 className="movie-card-title">{ title }</h4>

      {/* Requisito 9 */}
      <h5 className="movie-card-subtitle">{ subtitle }</h5>

      {/* Requisito 10 */}
      <p className="movied-card-storyline">{ storyline }</p>

      {/* Requisito 13 e 14 */}
      <Rating rating={ rating } />
    </section>
  );
}

// Requisito 17
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
