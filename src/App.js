import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const oi = 'oi';
  return (
    <div className="App">
      <Header text="Movie Cards Library" />
      <MovieList movies = { oi } />
    </div>
  );
}

export default App;
