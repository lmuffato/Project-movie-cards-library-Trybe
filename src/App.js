import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

import dataMovies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ dataMovies } />
    </div>
  );
}

export default App;
