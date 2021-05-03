// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <img src={ movie.imagePath } alt={ movie.imagePath } />
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf.isRequired,
};

export default MovieCard;
