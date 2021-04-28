import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <section>
      {movies.map((movie) => (
        <MovieCard key={ movie.title } movie={ movie } />
      ))}
    </section>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};
  
MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
