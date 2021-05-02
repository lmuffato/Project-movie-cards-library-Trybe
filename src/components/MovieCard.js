// implement MovieCard component here
// implement MovieList component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    console.log(`MovieCard.js -> movie === ${movie}`); // TESTE para conferência
    return (
      <span className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="movie" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } />
      </span>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes
    .arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
