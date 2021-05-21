// implement Rating component here
import React, { Component } from 'react';
import movies from '../data';

class Rating extends Component {
  render() {
    const { rating } = movies;
    return (
      <details>{ rating }</details>
    );
  }
}

export default Rating;
