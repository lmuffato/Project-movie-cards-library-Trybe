import React from 'react';
import PropTypes from 'prop-types';

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
          <div className="movie-card-title">
            {title}
          </div>
          <div className="movie-card-subtitle">
            {subtitle}
          </div>
          <div className="movie-card-storyline">
            {storyline}
          </div>
          <div className="rating">
            {rating}
          </div>
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
