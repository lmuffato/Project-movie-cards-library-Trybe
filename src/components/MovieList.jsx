import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard movie={ movie } key={ movies[index].title } />
        ))}
      </div>
    );
  }
}

// referencia sobre proptypes array https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

export default MovieList;
