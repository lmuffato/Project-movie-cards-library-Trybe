import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

const MovieList = ({ movies }) => (
  <section className="movie-list">
    {movies.map((movie) => (
      <MovieCard key={ movie.title } movie={ movie } />
    ))}
  </section>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

export default MovieList;
