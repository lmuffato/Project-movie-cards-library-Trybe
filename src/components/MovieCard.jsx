import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <div className="movie-card">
        <div className="movie-card-image">
          <img src={ imagePath } alt="Capa do Filme" />
        </div>
        <div className="movie-card-body">
          <h4 className="movie-card-title">
            {title}
          </h4>
          <h5 className="movie-card-subtitle">
            {subtitle}
          </h5>
          <p className="movie-card-storyline">
            {storyline}
          </p>
          <Rating rating={ rating || 0 } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
