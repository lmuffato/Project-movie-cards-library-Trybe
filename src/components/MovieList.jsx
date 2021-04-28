// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={ movie.title } movie={ movie } />
      ))}
    </div>
  );
}

export default MovieList;
