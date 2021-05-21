import React from 'react';
import MoviesData from '..data/'

class MovieCard extends React.Component {
  render() {
    return (
      <p>
        { MoviesData }
      </p>
    );
  }
}

export default MovieCard;
