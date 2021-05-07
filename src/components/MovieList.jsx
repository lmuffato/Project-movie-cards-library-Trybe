import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data';
import './MovieList.css';

class MovieList extends Component {
  render() {
    return (
      <main>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </main>
    );
  }
}

export default MovieList;
