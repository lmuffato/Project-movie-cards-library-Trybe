// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    <div>
      {props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
    </div>
  )
}

export default MovieList
