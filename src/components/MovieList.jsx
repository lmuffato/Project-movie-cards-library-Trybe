import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)}
      </ul>
    );
  }
}

export default MovieList;
