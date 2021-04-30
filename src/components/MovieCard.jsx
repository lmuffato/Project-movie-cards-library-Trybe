import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title } = this.props;

    return (
      <li>{title}</li>
    );
  }
}

export default MovieCard;
