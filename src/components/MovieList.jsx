// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;

  return (
    <div>
      {movies
        .map((element, index) => <MovieCard key={ `Movie Title ${index + 1}` } movies={ element } />)};
    </div>
  );
}

export default MovieList;
