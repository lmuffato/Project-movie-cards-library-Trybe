import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie) => <MovieCard key={ movie.title } movieProp={ movie } />)}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
