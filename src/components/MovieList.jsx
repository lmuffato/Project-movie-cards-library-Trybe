// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
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

// Checagem de props feita com base no estudo do material https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
// Usamos o PropTypes.arrayOf() para confirmar que a props é um array que, no caso, contém objetos.
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  )
};

export default MovieList;
