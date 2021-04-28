import React from 'react';
import MovieCard from './MovieCard';

function MovieList(prop) {
  const { movies } = prop;
  return (
    <div className="movie-list">
      {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </div>
  );
}

export default MovieList;
