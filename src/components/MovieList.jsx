import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    <>
      {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
