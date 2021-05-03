// implement MovieCard component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() { // Sintaxe necessária para a renderização dos elemntos
    const { movieML } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movieML; // faz o destructuring do objeto movieML
    console.log(`MovieCard.js -> titulo === ${title}`); // TESTE para conferência
    console.log(`MovieCard.js -> rating === ${rating}`); // TESTE para conferência
    return (
      <span className="movie-card">
        <img // A tag do elemento a ser renderizado é uma imgagem
          className="movie-card-image"
          src={ imagePath } // Através do src, encontra a imagem pelo link imagePath
          alt="movie_thumbnail" // Texto alternativo para a imgagem
        />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating ratingMC={ rating } />
      </span>
    );
  }
}

MovieCard.propTypes = {
  movieML: PropTypes.shape({ // Através do shape, verifica se o objeto movieML tem a estrurua de propriedades abaixo
    title: PropTypes.string, // Indica que o valor da propriedade title é um texto
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number, // Indica que o valor da propriedade rating é um número
  }).isRequired, // Indica que a propriedade é essencial (se não for indicada, retorna erro)
};

export default MovieCard;

/*
1. MovieCard recebe o arrays de objetos 'movies' do arquivo './data'
através do parâmetro 'moviesML' enviado pelo MovieList.
2. Renderiza os elementos com as tags HTML, contendo os valores indicados pela propriedade passada
3. Chama o componente Rating passando o valor da propriedade rating atravás da chave ratingMC.
*/
