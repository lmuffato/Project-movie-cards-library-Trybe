import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MovieList movies={ movies } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
