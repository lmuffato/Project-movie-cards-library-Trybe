import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import './MovieCard.css';

function MovieCard(props) {
  const { movies } = props;
  return (
    <div className="movie-card">
      <img src={ movies.imagePath } alt={ `Imagem de ${movies.title}` } />
      <div className="textContent">
        <h4>{ movies.title }</h4>
        <h5>{ movies.subtitle }</h5>
        <p>{ movies.storyline }</p>
        <Rating rating={ movies.rating } />
      </div>
    </div>
  );
}
MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieCard;
