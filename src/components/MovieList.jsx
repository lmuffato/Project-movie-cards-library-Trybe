import React from 'react';

import MovieCard from './MovieCard'

function MovieList(props) {
  const movies = props.movies;

  return (
    <div>
      {movies.map(movie => <MovieCard key={ movie.title }/>)}
    </div>
  );
}

export default MovieList;