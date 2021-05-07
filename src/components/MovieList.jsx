import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <body className="movie-list">
        {movies.map((movie) => (<MovieCard movie={ movie } key={ movie.title } />))}
      </body>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieList;
