// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    const { rating } = movieInfo;

    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img src={ movieInfo.imagePath } alt="" className="movie-card-image" />

          <h4 className="movie-card-title">{ movieInfo.title }</h4>

          <h5 className="movie-card-subtitle">{movieInfo.subtitle}</h5>

          <p className="movie-card-storyline">
            {movieInfo.storyline}
          </p>

          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
