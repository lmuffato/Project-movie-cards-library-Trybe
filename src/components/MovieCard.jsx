import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={movie.imagePath} alt={movie.title} />

        <h4>{movie.title}</h4>

        <h5>{movie.subtitle}</h5>

        <p>{movie.storyline}</p>
      </div>
    );
  }
}
