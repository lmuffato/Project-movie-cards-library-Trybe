import React from 'react';
import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        { movies.map((movie, key) => <MovieCard movie={ movie } key={ movie.title } />) }
      </div>
    );
  }
}

export default MovieList;
