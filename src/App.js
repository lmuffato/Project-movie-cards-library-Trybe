import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {

  const arrayObj = {};

  return (
    <div className="App">
     <Header />
     <MovieList movies={arrayObj}/>
    </div>
  )
}

export default App;
