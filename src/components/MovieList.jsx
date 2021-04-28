import React from 'react';
import MovieCard from './MovieCard';


function MovieList(props) {
  const { movies } = props;
  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard movie={ movie } key={ movie.title } />;
      })}
    </div>
  );
}

export default MovieList;
