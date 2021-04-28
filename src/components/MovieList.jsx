import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log('o que chega no MovieList');
    console.table(this.props);
    return (
      <section>
        {movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)}
      </section>
    );
  }
}

export default MovieList;
