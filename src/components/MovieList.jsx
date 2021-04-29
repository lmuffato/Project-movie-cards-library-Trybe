import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    this.props = movies;

    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  })),
};

export default MovieList;
