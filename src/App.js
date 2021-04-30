import React from 'react';
import './App.css';
import Titulo from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Titulo />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;
