// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <header>
        <h1>MovieList</h1>
        <MovieCard />
      </header>
    );
  }
}

export default MovieList;
