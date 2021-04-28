import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie) => <MovieCard key={ movie.title } movieProp={ movie } />)}
    </>
  );
}

export default MovieList;
