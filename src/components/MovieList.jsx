import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <ul>{movies}</ul>
    );
  }
}

export default MovieList;
