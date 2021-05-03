import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const { movie } = props;
  const { imagePath, title, subtitle, storyline, rating } = movie;

  return (

    <section className="movie-card">
      <div className="movie-card-body">

        <img className="movie-card-image" src={ imagePath } alt="movieFolder" />

        <h4 className="movie-card-title">
          {title}
        </h4>

        <h5 className="movie-card-subtitle">
          {subtitle}
        </h5>

        <p className="movie-card-storyline">
          {storyline}
        </p>

        <Rating className="movie-card-rating" rating={ rating } />

      </div>
    </section>

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
