import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title } = this.props;

    return (
      <li>{title}</li>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MovieCard;
