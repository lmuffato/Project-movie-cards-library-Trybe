// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// O componente MovieCard renderiza todas as informações dos filmes obtidas da prop movie.

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // Como o componente foi criado com class utilizamos this props conforme orientado no conteúdo do course e na aula ao vivo.
    const { title, subtitle, imagePath, storyline, rating } = movie; // Desestruturando movie para facilitar a utilização no código.
    return (
      <div>
        <img src={ imagePath } alt={ `${title} Cover` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>

    );
  }
}

// Checagem de props feita com base no estudo do material https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
// PropTypes.shape() - Utilizado para uma validação mais detalhada do objeto.
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.srting,
    rating: PropTypes.number,
  }),
};
// Utilizamos a defaultpropTypes para definir de forma estática uma props com valor default. src =https://blog.logrocket.com/a-complete-guide-to-default-props-in-react-984ea8e6972d/#:~:text=For%20a%20React%20component%20created,default%20props%20for%20the%20component.
// MovieCard.defaultpropTypes = {
//   movie: PropTypes.object,
// };

export default MovieCard;
