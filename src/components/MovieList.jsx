// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  console.log(movies);
  const key = 'Movie Title';
  return (
    <div>
      {movies
        .map((e, i) => <MovieCard key={ key + (i + 1) } movies={ e } />)};
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieList;
