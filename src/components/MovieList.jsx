import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    <section className="movie-list">
      {movies.map((movie) => <MovieCard key={ movie.title } movieInfo={ movie } />)}
    </section>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  })).isRequired,
};

export default MovieList;
