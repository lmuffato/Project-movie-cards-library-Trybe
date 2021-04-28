import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyLine, rating, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.propsTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
