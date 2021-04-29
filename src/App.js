import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header className="movie-card-header" />
      <section className="movie-list">
        <MovieList movies={ movies } />
      </section>
    </div>
  );
}

export default App;
