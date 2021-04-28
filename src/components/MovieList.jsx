import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => {
        return <MovieCard key={ movie.title } movie={ movie } />
        })}
    </div>
  );
}

export default MovieList;
