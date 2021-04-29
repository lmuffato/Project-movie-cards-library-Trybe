import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        { movies.map((movie, key) => <MovieCard movie={ movie } key={ `Movie Title ${ key + 1 }` } />) }
      </div>
    );
  }
}

export default MovieList;
