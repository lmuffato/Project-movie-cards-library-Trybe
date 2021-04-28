// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

function MovieList(props) {
  return (
    <div>
      {props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default MovieList
