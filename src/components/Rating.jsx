import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { movie } = this.props;
    const { rating } = movie;
    return (
      <fieldset>
        <p>{rating}</p>
      </fieldset>
    );
  }
}

Rating.propTypes = {
  movie: propTypes.object,
  rating: propTypes.number,
};

export default Rating;
