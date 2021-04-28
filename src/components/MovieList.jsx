// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div>
      { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </div>
  );
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieList;
