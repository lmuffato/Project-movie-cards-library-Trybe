import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    <main className="movie-list">
      { movies.map((movie, index) => (
        <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />))}
    </main>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
