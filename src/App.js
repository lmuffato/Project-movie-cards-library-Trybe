import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import { render } from 'enzyme';
// import Rating from './components/Rating';

function App() {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList/>
      </div>
    );
  }
}

export default App;
