import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => MovieCard(movie))}
    </div>
  );
}

export default MovieList;
