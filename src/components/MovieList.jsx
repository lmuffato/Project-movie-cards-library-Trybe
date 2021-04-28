import React from 'react';
import MovieCard from './MovieCard';

function Movielist(props) {
  return (
    <section>
      {props.movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
    </section>
  );
}

export default Movielist;
