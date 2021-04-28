// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
// O componente MovieList recebe e renderiza todos os MovieCards através do map que retorna um novo array, contendo as informações dos filmes obtidas em data.js.

class MovieList extends React.Component {
  render() {
    const { movies } = this.props; // Como o componente foi criado com class utilizamos props conforme orientado no conteúdo do course e na aula ao vivo.
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
export default MovieList;
