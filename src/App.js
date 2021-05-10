import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import DataMovies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList moviesList={ DataMovies } />
    </div>
  );
}

export default App;
