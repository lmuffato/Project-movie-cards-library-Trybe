// implement MovieList component here
import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    <ul className="movie-list">
      {movies.map((element) => <MovieCard movie={ element } key={ element.title } />)}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
