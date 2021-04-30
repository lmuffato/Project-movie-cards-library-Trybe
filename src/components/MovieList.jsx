import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;

// Referências:
// Recebi ajuda das colegas Heloísa Hackenhaar e Ana Ventura
// https://github.com/tryber/sd-010-a-project-movie-cards-library/pull/30/files
// https://github.com/tryber/sd-010-a-project-movie-cards-library/pull/64/files
