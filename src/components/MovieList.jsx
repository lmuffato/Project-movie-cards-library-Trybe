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
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movielist;
