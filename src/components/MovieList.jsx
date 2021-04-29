import React from 'react';
/* import PropTypes from 'prop-types'; */
/* import MovieCard from './movieCard'; */

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-list">
        La vai movies
      </div>
    )
  }
}

export default MovieList
