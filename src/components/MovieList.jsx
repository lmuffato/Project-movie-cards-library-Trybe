import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data'


class MovieList extends React.Component {
  render() {
    
    return (
      <section>
        {movies.map((movie, index) => {
            return (
                <MovieCard movie= { movie } />
  
            );
        })}
  
      </section>
    )
  }
}


export default MovieList;

