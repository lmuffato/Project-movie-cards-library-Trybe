import React from 'react';
import '../App.css';
import MovieCard from './MovieCard';

function MovieList(prop) {
  const { movies } = prop;
  return (
    <main className="movie-list">
      { movies.map((movie, index) => (
        <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />))}
    </main>
  );
}

export default MovieList;
