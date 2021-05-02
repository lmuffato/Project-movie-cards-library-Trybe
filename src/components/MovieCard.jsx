// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt="poster" className="movie-card-image" />
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
          <div className="movie-card-rating">
            <Rating className="rating" rating={ rating } />
          </div>
        </div>
      </section>
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
