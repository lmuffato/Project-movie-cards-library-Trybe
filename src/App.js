import React from 'react';
import './App.css';

import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <section className="App">
      <Header />
      <MovieList />
    </section>
  );
}

export default App;
