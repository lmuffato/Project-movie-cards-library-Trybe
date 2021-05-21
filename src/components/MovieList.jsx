// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (
      <nav>
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
      </nav>
    );
  }
}

export default MovieList;
