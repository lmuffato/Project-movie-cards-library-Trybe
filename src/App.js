import React from 'react';
import './App.css';
import movies from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <App />
    </div>
  );
}

export default App;
