import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <span>{rating}</span>
          <img src={ imagePath } alt="Imagem do filme" />
        </div>
      </section>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    },
  ).isRequired,
};

export default MovieCard;
