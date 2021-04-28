// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  console.log(movies);
  return (
    <div>
      { movies.map((movie) => <MovieCard key={ Math.random() * 100 } movies={ movie } />)}
    </div>
  );
}
export default MovieList;
