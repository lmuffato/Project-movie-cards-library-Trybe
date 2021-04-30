import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      // Source: https://github.com/tryber/sd-09-project-movie-cards-library/tree/45bd19080254fcabbc0964060bf93c3334899c9d
      <section className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </section>
    );
  }
}

// Source: https://github.com/tryber/sd-09-project-movie-cards-library/tree/45bd19080254fcabbc0964060bf93c3334899c9d
MovieList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieList;
