// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <div>
        <img src={movie.imagePath} alt='image'></img>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
      </div>
    )
  }
}

export default MovieCard