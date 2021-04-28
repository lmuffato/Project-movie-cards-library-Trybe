import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = props;
    const { imagePath } = movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
