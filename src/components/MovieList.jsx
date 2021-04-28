// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <section>
    {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
  </section>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
