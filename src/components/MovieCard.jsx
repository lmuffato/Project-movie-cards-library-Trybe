import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCards extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline } = movie;
    return (
      <section>
        <h4>
          {title}
        </h4>
        <h5>
          {subtitle}
        </h5>
        <p>
          {storyline}
        </p>
        <img src={ imagePath } alt="" />
      </section>);
  }
}

MovieCards.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCards;
