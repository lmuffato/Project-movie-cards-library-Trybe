import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <article>
        {
          movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)
        }
      </article>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default MovieList;
