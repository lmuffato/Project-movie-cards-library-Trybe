import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard movie={ movie } key={ `Movie Title ${index + 1}` } />
        ))}
      </section>
    );
  }
}

export default MovieList;
