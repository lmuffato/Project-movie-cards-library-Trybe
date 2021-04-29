// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const movieCard = movies.map(
      (movie) => <MovieCard key={ movie.title } movie={ movie } />,
    );
    // console.log(this.props.movies);
    return (
      <section>
        {movieCard}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

export default MovieList;
