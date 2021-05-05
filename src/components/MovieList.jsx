import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { database } = this.props;
    return (
      <ul className='movie-list'>
        { database.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

export default MovieList;
