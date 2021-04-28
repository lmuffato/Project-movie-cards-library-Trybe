import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    props.movies.map((mov) => (
      <MovieCard key={ mov.title } movie={ mov } />
    ))
  );
}

export default MovieList;
