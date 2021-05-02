// implement MovieList component here
import './MovieList.css';
import React from 'react';
import MovieCard from './MovieCard';
// import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = props;
    return (
      <main className="movie-list">
        {movies
          .map((movie) => <MovieCard key={ movie.title } Movie={ movie } />)}
      </main>
    );
  }
}

export default MovieList;
