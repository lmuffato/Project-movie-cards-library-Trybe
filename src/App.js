import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import database from './data';
import './App.css';

function App() {
  console.log(database);
  return (
    <div className="App">
      <Header />
      <MovieList movies= { database } />
    </div>
  );
}

export default App;
