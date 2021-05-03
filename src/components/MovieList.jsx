import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    
    return (
      <div>
        { movies.map(movie => <MovieCard movie={movie} key={movie.title}/>) }
      </div>
    );
  }
}

export default MovieList;