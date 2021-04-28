// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="MovieList">
        {this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    )
  }
}

export default MovieList;