// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  const key = 'Movie Title';
  return (
    <div>
      {movies
        .map((element, index) => <MovieCard 
          key={ key + (index + 1) } 
          movies={ element } 
        />)};
    </div>
  );
}

export default MovieList;
