import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// Fiz através do class porque foi a forma que entendi melhor

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
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
