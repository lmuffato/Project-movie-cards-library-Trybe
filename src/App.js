import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={[{title: 'Avatar',
      imagePath: 'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UX182_CR0,0,182,268_AL_.jpg',
      subtitle: 'A Lenda de Aang ',
      storyline: 'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.',
      rating: 9.2,
      }]} />
    </div>
  );
}

export default App;
