import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { movie } = props;
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div>
      <Rating rating={ rating } />
      <img src={ imagePath } alt={ ' ' } />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
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
