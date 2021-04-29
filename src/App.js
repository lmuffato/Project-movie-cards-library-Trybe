import React from 'react';
import './App.css';
import movies from './data';

import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <section className="App">
      <Header />
      <MovieList movies={ movies } />
    </section>
  );
}

export default App;
