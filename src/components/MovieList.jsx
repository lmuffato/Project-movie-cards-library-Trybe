import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map((movie) => <MovieCard key={ movie.title } title={ movie.title } />)}
      </ul>
    );
  }
}

export default MovieList;
