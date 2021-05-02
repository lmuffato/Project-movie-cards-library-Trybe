// implement Rating component here
// implement MovieCard component here
// implement MovieList component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { rating } = this.props;
    console.log(`Rating.js -> raint === ${rating}`); // TESTE para conferência
    return (
      <h5 className="rating">{rating}</h5>
    );
  }
}

MovieCard.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
