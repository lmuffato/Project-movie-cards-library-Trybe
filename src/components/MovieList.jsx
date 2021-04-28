// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {

  return (
    <div>
      {props.movies.map((element, index) => {
        return (
          <MovieCard key={`Movie Title ${index + 1}`} movies={element} />
        )
      })}
    </div>
  );
}

export default MovieList;