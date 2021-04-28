import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        { this.props.movies.map((movie) => 
        <MovieCard key={ movie.title } movie={ movie } />) }
      </section>
    );
  };
};

export default MovieList;
