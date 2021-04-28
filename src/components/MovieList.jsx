// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    <div>
      {Array.map((element) => {
        return (
          <MovieCard key={element} />
        )
      })}
      
    </div>
  );
}

export default MovieList;