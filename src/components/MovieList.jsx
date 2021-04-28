// implement MovieList component here
import React from 'react';
// import PropTypes from 'prop-types';
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
/* 
MovieList.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired
  })
} */

export default MovieList;
