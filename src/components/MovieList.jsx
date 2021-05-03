import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  console.log(props);

  return (
    <div className="movie-list">

      { movies.map((currentMovie) => (
        <MovieCard
          key={ currentMovie.title }
          movie={ currentMovie }
        />
      )) }

    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
