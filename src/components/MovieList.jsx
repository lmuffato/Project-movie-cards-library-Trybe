// implement MovieList component here
import React from 'react'
import MovieCard from './MovieCard'
import proptypes from 'prop-types'
// import App from './src/App'

function MovieList (movieInfo) {
    const { movies } = movieInfo;

    return (
     <section className="movie-list"> { movies.map((movie) =>
     ( <MovieCard key ={ movie.title } movie = { movie } /> ))} </section>
    )
}
MovieList.propTypes = {
    movies: proptypes.arrayOf(proptypes.shape({
        title: proptypes.string,
        subtitle: proptypes.string,
        storyline: proptypes.string,
        rating: proptypes.number,
        imagePath: proptypes.string,
  }),
 ).isRequired,
}

export default MovieList