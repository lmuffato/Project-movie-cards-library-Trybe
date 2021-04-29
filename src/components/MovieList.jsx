import React from 'react';
import MovieCard from './MovieCard';
import '../css/movieList.css';

function MovieList(props) {
  const movies = props;
  console.log(movies);
  return (
    <div className="container">
      {movies.movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </div>);
}

export default MovieList;
