import React from 'react';
import PropTypes from 'prop-types';
// import './MovieList.css';
import MovieCard from './MovieCard';
// Crie um componente que represente toda a área com os cartões de filmes. <MovieList />
// deve receber uma prop movies, que é um array de objetos com informações de um filme

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>{movies.map((movie, i) => <MovieCard key={ i } movie={ movie } />)}</div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
