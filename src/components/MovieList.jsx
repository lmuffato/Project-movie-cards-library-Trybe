import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    props.movies.map((mov) => (
      <MovieCard key={ mov.title } movie={ mov } />
    ))
  );
}

MovieList.propTypes = {
  key: PropTypes.string,
};

export default MovieList;
