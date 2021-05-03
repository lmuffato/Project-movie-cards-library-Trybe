import React from 'react';
// import './MovieList.css';
import MovieCard from './MovieCard';

// Crie um componente que represente toda a área com os cartões de filmes. <MovieList />
// deve receber uma prop movies, que é um array de objetos com informações de um filme

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <MovieCard />
      </div>
    );
  }
}
export default MovieList;
