import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map((mov) => (<MovieCard key={ mov.title } movie={ mov } />))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
