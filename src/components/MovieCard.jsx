import React from 'react';
import Protypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;

    return (
      <div>
        <div>
          <h1>{title}</h1>
          <h1>{subtitle}</h1>
          <p>{storyline}</p>
        </div>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Protypes.arrayOf(Protypes.shape({
    title: Protypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};
export default MovieCard;
