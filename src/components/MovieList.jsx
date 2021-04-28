import React from 'react';
import Proptypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) =>
        <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
    movie: PropTypes.objectOf(Proptypes.string).isRequired,
}

export default MovieList;
