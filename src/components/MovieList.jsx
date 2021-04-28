import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, title } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard movie={ movie } key={ title } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieList;
