import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCards extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = movie;
    return (
      <section className="movie-card">
        <div className=" movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt="" />
          <h4 className="movie-card-title">
            {title}
          </h4>
          <h5 className="movie-card-subtitle">
            {subtitle}
          </h5>
          <p className="movie-card-storyline">
            {storyline}
          </p>
          <Rating rating={ rating } />
        </div>
      </section>);
  }
}

MovieCards.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCards;
