import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCards from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (movies.map((movie) => <MovieCards key={ movie.title } movie={ movie } />));
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default MovieList;
