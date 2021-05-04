// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src="" alt="" />
        <h4>Titulo</h4>
        <h5>SubTitulo</h5>
        <p>Sinopse</p>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
