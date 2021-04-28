// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt={ `${title} card` } />
          <div>
            <h4>{ title }</h4>
            <h5>{ subtitle }</h5>
            <p className="movie-card-storyline">{ storyline }</p>
          </div>
          <div className="movie-card-rating">
            <Rating rating={ rating } />
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
