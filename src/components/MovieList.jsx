// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  console.log(movies);

  return (
    <section>
      { movies.map((movie) => <MovieCard key={ movie.title } movieInfo={ movie } />) }
    </section>
  );
}

// MovieCard.propTypes = {
//   movies: PropTypes.string.isRequired,
// };

export default MovieList;
