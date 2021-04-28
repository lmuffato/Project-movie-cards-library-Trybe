import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard({ movie }) {
  const { title, subtitle, storyline, imagePath, rating } = movie;

  return (
    <section>
      <img src={ imagePath } alt="capa do filme" />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <Rating rating={ rating } />
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
