import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { database } = this.props;
    return (
      <ul>
        { database.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
  database: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
