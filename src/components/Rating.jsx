// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
// O componente Rating irá renderizar dentro do MovieCard as notas(ratings) dos filmes, obtidos através do data.js;

class Rating extends React.Component {
  render() {
    const { rating } = this.props; // Como o componente foi criado com class utilizamos props conforme orientado no conteúdo do course e na aula ao vivo.
    return (
      <p className="rating">
        {rating}
      </p>
    );
  }
}

// Checagem de props feita com base no estudo do material https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/

Rating.propTypes = {
  rating: PropTypes.number,
};
// Utilizamos a defaultpropTypes para definir de forma estática uma props com valor default. src =https://blog.logrocket.com/a-complete-guide-to-default-props-in-react-984ea8e6972d/#:~:text=For%20a%20React%20component%20created,default%20props%20for%20the%20component.
Rating.defaultProps = {
  rating: 5,
};

export default Rating;
