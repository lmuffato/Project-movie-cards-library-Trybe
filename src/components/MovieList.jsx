import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (
      <main className="movie-list">
        { movies
          .map((movie) => <MovieCard key={ movie.title } movies={ movie } />)}
      </main>
    );
  }
}

export default MovieList;
