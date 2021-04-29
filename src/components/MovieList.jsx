// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    // console.log(this.props);
    // const movies = this.props;
    console.log(movies);
    return (
      movies
        .map((movie) => <MovieCard key={ movie.title } Movies={ movie } />)
    );
  }
}

export default MovieList;
