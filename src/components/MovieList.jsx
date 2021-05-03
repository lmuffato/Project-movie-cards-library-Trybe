import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        { movies.map((movie, index) => {
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
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string })
}

export default MovieList;
