// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <p>teste cartao de filme</p>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
