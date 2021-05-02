// import { prototype } from 'enzyme-adapter-react-16';
import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <>
      <div><Header /></div>
      <div><MovieList filme={ movies } /></div>
    </>
  );
}

export default App;
