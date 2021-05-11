// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    movies.map((movie) => (
      <MovieCard key={ movie.title } movie={ movie } />
    ))
  );
}

// class MovieList extends React.Component {
//   render() {
//     return (
//       <h1>Movie List</h1>
//     );
//   }
// }

export default MovieList;
