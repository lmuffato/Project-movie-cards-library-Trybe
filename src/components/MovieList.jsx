import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    this.props = movies;

    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
      </div>
    );
  }
}

export default MovieList;
