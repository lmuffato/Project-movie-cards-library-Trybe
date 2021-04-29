// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// nesse componente MovieList retorno um map, onde ele irar imprimir um movieCard a cada objeto Filme do dos dados.js, que foram passados como props

function MovieList(props) {
  const { movies } = props;

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
