// implement MovieList component here
import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { filme } = props;
  return (
    <ul className="movie-list">
      {filme.map((movie) => <MovieCard filmes={ movie } key={ movie.title } />)}
    </ul>
  );
}

MovieList.propTypes = {
  filme: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
