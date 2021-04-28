import React from 'react';

import data from './data';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
// import Rating from './components/Rating';

function App() {
  // const ratings = data.map(({ rating }) => rating);

  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
      {/* <Rating ratings={ ratings } /> */}
    </div>
  );
}

export default App;
