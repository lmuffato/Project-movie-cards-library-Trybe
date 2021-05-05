import React from 'react';
import movies from './data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((movie) => (
            <MovieList key={ movie.title } movie={ movie } />))
        }
      </div>
    );
  }
}

export default MovieList;
