import React from 'react';
import { arrayOf, object } from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: arrayOf(object),
}.isRequired;

export default MovieList;
