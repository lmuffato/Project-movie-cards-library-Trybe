import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const content = movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
    return (
      <main>{content}</main>
      );
  }
}

export default MovieList;
