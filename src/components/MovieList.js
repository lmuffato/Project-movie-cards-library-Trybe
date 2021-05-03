// implement MovieList component here
import React, { Component } from 'react'; // com a declaração, dispens a sintexe class MovieList extends React.Component
import PropTypes from 'prop-types'; // impota a função de checagem de tipos
import MovieCard from './MovieCard'; // importa o componente MovieCard

class MovieList extends Component { // Cria a classe ou componente MovieList
  render() { // Sintaxe necessária para a renderização dos elemntos
    const { movies } = this.props; // Delcara o objeto moviesApp dentro da classe MovieList
    console.log(`MovieList.js -> array de Objetos === ${movies}`); // TESTE para conferência
    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes // Passa o parâmetro moviesApp para checagem
    .arrayOf(PropTypes.object).isRequired, // verifica se o moviesApp é um array de objetos e declara que é necessáiro
};

export default MovieList;

/*
1. MovieList recebe o arrays de objetos 'movies' do arquivo './data' através do parâmetro 'movies'.
2. Itera o movies separando por objeto, tendo como key o título do filme
2.1 A cada iteração do map, um objeto indivdual é introduzido como parâmetro no MovieCard
através da chave movie, contedo um objeto individual com os atributos do filme.
*/
