import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>
          Título:
          {title}
        </h4>
        <h5>
          Tubtitlo:
          {subtitle}
        </h5>
        <p>
          História:
          {storyline}
        </p>
        <img src={ imagePath } alt="Imagens movies" />
        <Rating rating={ rating } />
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
