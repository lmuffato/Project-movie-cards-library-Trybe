import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />);
}

export default MovieList;
