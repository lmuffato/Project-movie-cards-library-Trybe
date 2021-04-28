import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle } = movie;
    return (
      <div>
        <img src={ imagePath } alt="foto do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
    );
  }
}

// referencia sobre proptypes array https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape
MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  })).isRequired,
};
export default MovieCard;
