import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
    </div> // Header - renderiza o header da página. MovieList com props movies - renderiza o MovieList com os movieCards dentro. A props movies vem de data que traz a lista de filmes.
  );
}

export default App;
