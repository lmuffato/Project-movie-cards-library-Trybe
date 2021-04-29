import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div>
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
