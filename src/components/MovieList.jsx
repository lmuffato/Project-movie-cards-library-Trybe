import React from 'react';
import MovieCard from './MovieCard';

function MovieList(prop) {
  return (
    prop.movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
  );
}

export default MovieList;
