import React from 'react';
import './App.css';
import movie from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={ movie } />
    </div>
  );
}

export default App;
