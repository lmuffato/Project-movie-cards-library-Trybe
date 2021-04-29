import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header className="movie-card-header" title="Movie Cards Library" />
      <MovieList className="movie-list" movies={ movies } />
    </div>
  );
}

export default App;
