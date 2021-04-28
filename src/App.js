import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const movies = [
    {
      title: 'Piratas do Caribe',
      subtitle: 'O Prisioneiro de Azcabam',
      storyline: '',
      imagePath: '',
      rating: 10,
    },
    {
      title: 'O Senhor dos Anéis',
      subtitle: 'As Duas Torres',
      storyline: '',
      imagePath: '',
      rating: 10,
    },
  ];

  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
