import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const allMovies = movies;
    return (
      <div>
        { allMovies.map((movie, index) => {
          const movieKey = `Movie Title ${index + 1}`;
          return (
            <MovieCard
              key={ movieKey }
              movie={ movie }
            />
          );
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string }).isRequired,
};

export default MovieList;
