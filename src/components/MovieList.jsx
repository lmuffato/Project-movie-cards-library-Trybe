import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  
  render() {
    return (
      <ul className = 'movie-list'>
        {this.props.movies.map((ele) =>
          <MovieCard movie = { ele } key = { ele.title } /> 
        )}
      </ul>
    )
  }
}

export default MovieList;
