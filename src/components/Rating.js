// implement Rating component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    console.log(`Rating.js -> raint === ${rating}`); // TESTE para conferência
    return (
      <div>
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;

/*
1. Rating recebe o valor rating, através do parâmetro ratingMC, correspondente ao filme
iterado individualmente pelo MovieList e passado para o MovieCard através do parâmetro
movieML.
através do parâmetro 'moviesML' enviado pelo MovieList.
2. Renderiza os elementos com as tags HTML, contendo os valores indicados pela propriedade passada
3. Chama o componente Rating passando o valor da propriedade rating atravás da chave ratingMC.
*/
