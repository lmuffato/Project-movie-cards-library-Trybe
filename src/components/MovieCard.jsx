import React from 'react';
import PropTypes from 'prop-types';
import Raiting from './Rating';

function MovieCard(props) {
  const { movie: { imagePath, title, subtitle, storyline, rating } } = props;

  return (
    <div className="movie-card-body">
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ `foto ${title}` } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Raiting rating={ rating } />
      </section>
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
