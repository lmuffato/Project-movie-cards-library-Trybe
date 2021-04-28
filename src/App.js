import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';

function App() {
  return (
  <div><Header /></div>
  <div> <MovieCard /></div>
  <div><MovieList /></div>
  <div><Rating /></div>
  );
}

export default App;
