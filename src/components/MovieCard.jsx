import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return <img src={movie.imagePath} alt={movie.title} />;
  }
}
