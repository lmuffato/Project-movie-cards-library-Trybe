import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (<MovieCard key={ movie.rating } />))}
    </>
  );
}

MovieList.defaultProps = {
  movies: {},
};

MovieList.propTypes = {
  movies: {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  },
};
