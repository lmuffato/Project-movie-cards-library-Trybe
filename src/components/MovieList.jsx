// implement MovieList component here
import './MovieList.css';
import React from 'react';
import MovieCard from './MovieCard';
// import movies from '../data';

const MovieList = (props) => {
  console.log(props.movies);
  const movies = props.movies;
  return (
    <main className="movie-list">
      {movies
        .map((movie) => <MovieCard key={ movie.title } Movie={ movie } />)}
    </main>
  );
};
export default MovieList;
