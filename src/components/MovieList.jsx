// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    <div>
      {movies
        .map((e, i) => <MovieCard key={ `Movie Title ${i + 1}` } movie={ e } />)}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieList;
