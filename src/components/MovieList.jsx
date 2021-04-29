// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // console.log(this.props.movies);
    return (
      this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />
      )
    );
  }
}

export default MovieList;