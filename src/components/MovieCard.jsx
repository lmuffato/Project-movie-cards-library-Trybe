import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    return (
      <div>
        <h1>Movie Card</h1>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
