import MovieCard from './MovieCard';

function MovieList(props) {
  return props.movies.map((movie) => MovieCard(movie));
}

export default MovieList;
