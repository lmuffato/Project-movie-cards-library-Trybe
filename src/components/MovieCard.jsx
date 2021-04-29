// implement MovieCard component here

import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
  // Requisito 6
  const { movie } = props;
  const { title, subtitle, storyline, imagePath, rating } = movie;

  return (
    <section>
      {/* Requisito 7 */}
      <img src={ imagePath } alt={ title } />

      {/* Requisito 8 */}
      <h4>{ title }</h4>

      {/* Requisito 9 */}
      <h5>{ subtitle }</h5>

      {/* Requisito 10 */}
      <p>{ storyline }</p>

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
    imagePath: PropTypes.number,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
