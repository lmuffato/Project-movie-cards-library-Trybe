// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // console.log(this.props);
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard />
        ))}
      </div>
    );
  }
}

export default MovieList;
