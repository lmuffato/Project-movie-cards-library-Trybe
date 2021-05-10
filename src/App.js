import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import DataMovies from './data';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <MovieList movies={ DataMovies } />
      </div>
    );
  }
}
