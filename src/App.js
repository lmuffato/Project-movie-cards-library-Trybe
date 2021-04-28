import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import MovieCard from './components/MovieCard';

function App() {
  const movies = [
    {
      title: 'Movie Title 1',
      subtitle: 'Movie Subtitle 1',
      storyline: 'Movie Storyline 1',
      rating,
      imagePath: 'images/movie_1',
    },
    {
      title: 'Movie Title 2',
      subtitle: 'Movie Subtitle 2',
      storyline: 'Movie Storyline 2',
      rating,
      imagePath: 'images/movie_2',
    },
    {
      title: 'Movie Title 3',
      subtitle: 'Movie Subtitle 3',
      storyline: 'Movie Storyline 3',
      ratingThree,
      imagePath: 'images/movie_3',
    },
  ];

  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies }>
        <h1>Oi</h1>
      </MovieList>
    </div>
  );
}

export default App;
