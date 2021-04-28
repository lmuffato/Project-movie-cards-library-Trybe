// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList() {
  const movies = ['A barraca do beijo1', 'A barraca do beijo2', 'A barraca do beijo3'];
  const returnMovies = movies.map((item, index) => (<li key={ index }>{item}</li>));
  return (
    <div>
      <MovieCard />
      <ul>
        {returnMovies}
      </ul>
    </div>
  );
}

export default MovieList;
