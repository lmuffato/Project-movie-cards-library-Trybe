import React from 'react';
import './App.css';
import Titulo from './components/Header';
import MovieCard from './components/MovieCard';
import { movies } from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Titulo />
        <MovieCard movie={ movies } />
      </div>
    );
  }
}

export default App;
