// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

function MovieList(props) {

  return (
    <div>
      {movies.map((element) => {
        return (
          <MovieCard movies={element} />
        )
      })}
      
    </div>
  );
}

export default MovieList;