import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((data) => (
          <MovieCard key={ data.title } movie={ data } />
        ))}
      </section>
    );
  }
}

export default MovieList;
