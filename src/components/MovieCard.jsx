import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCards extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath } = movie;
    return (
      <section>
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
        <img src={ imagePath } alt="" />
      </section>);
  }
}

MovieCards.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCards;
