import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ ['Batman', 'Marvel'] } />
    </div>
  );
}

export default App;
