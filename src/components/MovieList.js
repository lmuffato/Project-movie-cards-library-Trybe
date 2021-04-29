// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import App from './src/App'

function MovieList(movieInfo) {
  const { movies } = movieInfo;
  const map = movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />));
  return (
    <section className="movie-list">
      { map }
    </section>
  );
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieList;
