import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline } = movie;
    return (
      <div>
        <img src={ imagePath } alt="foto do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    );
  }
}

// referencia sobre proptypes array https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape
MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  })).isRequired,
};
export default MovieCard;
