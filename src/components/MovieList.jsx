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
  // key: PropTypes.string,
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieList;
