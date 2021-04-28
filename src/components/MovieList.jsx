import React from 'react';

import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={ movie.title } movie={ movie } />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieList;

// REFERENCES:
// https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape
