import React from 'react';
import MovieCard from './MovieCard';

function Movielist(props) {
  return (
    <section>
      {props.movies.map((movie) => <MovieCard movie = { movie } />)}
    </section>
  );
}

export default Movielist;
