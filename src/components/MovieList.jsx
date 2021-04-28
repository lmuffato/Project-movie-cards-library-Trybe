import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard key={ movie.title } />;
      })}
    </div>
  );
}

export default MovieList;
