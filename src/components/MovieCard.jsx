import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div id="moviecard">
        {
          movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />))
        }
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default MovieCard;
