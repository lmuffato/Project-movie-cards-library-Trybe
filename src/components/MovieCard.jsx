// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.imagePath} alt={`${this.props.movie.title} poster`} />
        <h4>{this.props.movie.title}</h4>
      </div>
    );
  }
}

export default MovieCard;
