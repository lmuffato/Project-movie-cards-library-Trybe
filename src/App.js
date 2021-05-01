import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import filmes from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="movie-card-header" />
      <MovieList movies={ filmes } className="movie-list" />
    </div>
  );
}

export default App;
