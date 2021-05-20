import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.shape(),
}.isRequired;

export default MovieList;
