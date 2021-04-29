import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import '../node_modules/bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App box has-background-grey-light">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
