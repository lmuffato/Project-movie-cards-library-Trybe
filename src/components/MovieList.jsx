import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function Movielist({ movies }) {
  return (
    <section>
      { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
    </section>
  );
}

Movielist.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default Movielist;
