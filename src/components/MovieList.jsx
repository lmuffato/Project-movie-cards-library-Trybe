import React from 'react';
import MovieCard from './MovieCard';

// pegar o data  dele fazer os cards
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard
            movie={ movie }
            key={ `Title ${index + 1}` }
          />))}
      </div>
    );
  }
}

export default MovieList;
