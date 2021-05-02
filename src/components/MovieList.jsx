import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// pegar o data  dele fazer os cards
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard
            movie={ movie }
            key={ `Movie Title ${index + 1}` }
          />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
