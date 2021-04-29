// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { movie } = props;
  console.log(movie);

  return (
    <section>
      <img src={ movie.imagePath } alt={ movie.title } />
      <h4>{ movie.title }</h4>
      <h5>{ movie.subtitle }</h5>
      <p>{ movie.storyline }</p>
      <Rating rating={ movie.rating } />
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
