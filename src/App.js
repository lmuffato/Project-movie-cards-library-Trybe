import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="movie-list">
        <MovieList movies={ movies } />
      </main>
    </div>
  );
}
export default App;
