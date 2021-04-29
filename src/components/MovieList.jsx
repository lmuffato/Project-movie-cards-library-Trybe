// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  // console.log(movies);

  return (
    <section className="movie-list">
      { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
    </section>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
