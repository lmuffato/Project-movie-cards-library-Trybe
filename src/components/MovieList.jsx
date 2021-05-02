import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

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
movies: PropTypes.array,
}

export default MovieList;
