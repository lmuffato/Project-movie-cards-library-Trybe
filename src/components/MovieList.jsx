// implement MovieList component here
// Requisito 3, 4 e 5
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;

  return (
    <main>
      {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </main>
  );
}

// Requisito 17
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
