// import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList moviesApp={ movies } />
    </div>
  );
}

export default App;

/*
1. App recebe o array de0 objetos 'movies' do componente './data'
2.1. App.js chama Header que retorna com seus elementos;
2.2. App chama MovieList enviando o array 'movies' como parâmetro 'moviesApp'
*/
