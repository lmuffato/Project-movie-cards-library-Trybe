// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    // console.log(movie);
    return (
      <section className="movie-list">
        { movie.map((movieActual) => (
          <MovieCard key={ movieActual.title } movie={ movieActual } />
        ))}
      </section>
    );
  }
}

export default MovieList;
