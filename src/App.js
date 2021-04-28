import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList
        movies={
          [{ name: 'Piratas do Caribe' }, { name: 'O Senhor dos Anéis' }]
        }
      />
    </div>
  );
}

export default App;
