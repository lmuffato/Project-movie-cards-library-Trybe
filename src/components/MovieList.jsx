import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    movies.map((movie) => {
      const { title } = movie;
      return <MovieCard movie={ movie } key={ title } />;
    })
  );
}

export default MovieList;
