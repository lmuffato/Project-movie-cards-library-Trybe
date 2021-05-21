import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    // const { movie } = this.props;
    return (
      <section>
        <h1>Movie List</h1>
        <MovieCard />
      </section>
    );
  }
}

export default MovieList;
