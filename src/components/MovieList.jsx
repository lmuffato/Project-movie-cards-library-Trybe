import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;

  return (
    <div>
      { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number,
  })).isRequired,
};

export default MovieList;
