import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  const { title, subtitle, storyline, imagePath, rating } = movie;

  return (
    <div>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
      <p>{ storyline }</p>
      <img src={ imagePath } alt={ title } />
      <span>{ rating }</span>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
