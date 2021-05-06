import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    let rating;
    if ('rating' in movie) (rating = movie.rating);
    else if ('ratingThree' in movie) (rating = movie.ratingThree);

    return (
      <section className="movie-card">
        <section className="movie-card-image">
          <img src={ movie.imagePath } alt="teste" />
        </section>
        <section className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <Rating rating={ rating } />
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    ratingThree: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    ratingThree: null,
  }),
};

export default MovieCard;
