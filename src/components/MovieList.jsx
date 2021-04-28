import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    <section className="movie-list">
      {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </section>
  );
}

export default MovieList;
