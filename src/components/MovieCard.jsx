import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { imagePath } = this.props.movie
    return (
      <div>
        <img src={ imagePath } alt="foto do filme" />
        <h1>Movie Card</h1>
      </div>
    );
  }
}

export default MovieCard;
