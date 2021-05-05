import React from 'react';
import './App.css';
import Headers from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Headers />
      <MovieList moviesList={ movies } />
    </div>
  );
}

export default App;
