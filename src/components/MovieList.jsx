// implement MovieList component here
import React from 'react';
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

export default MovieList;
