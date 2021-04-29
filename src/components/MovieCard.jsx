import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // falta adicionar o rating na desestruturaçao
    const { imagePath, title, subtitle, storyline } = movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
  }).isRequired,
};
export default MovieCard;

// Referências: https://www.youtube.com/watch?v=WPYI2CcRX7c;
// https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/20974555-f019-4a7d-aa2d-e0fd5546025e/proptypes-checagem-de-tipos/711cf7f5-ba96-43ab-bdb5-394e58b822c1?use_case=side_bar
