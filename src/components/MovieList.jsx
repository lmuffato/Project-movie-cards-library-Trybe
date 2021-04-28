// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <main>
      {movies.map((movie) => (
        <MovieCard movie={ movie } key={ movie.title } />
      ))}
    </main>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieList;
