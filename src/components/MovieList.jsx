import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component { // requisito 3
  render() {
    const { movies } = this.props;
    return (
      <section classeName="movie-list">
        {
          movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default MovieList;
