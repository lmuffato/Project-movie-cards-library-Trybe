import React, { Component } from 'react';
import MovieList from './MovieList';
import data from '../data';

class App extends Component {
  render() {
    return (
      <div>
        <MovieList movies={ data } />
      </div>
    );
  }
}

export default App;
