import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../MovieList.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="c-MovieList">
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
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
