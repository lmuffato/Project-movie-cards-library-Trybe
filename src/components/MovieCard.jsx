// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <img src={this.props.movie.imagePath} alt={`${this.props.movie.title} poster`} />
    );
  }
}

export default MovieCard;
