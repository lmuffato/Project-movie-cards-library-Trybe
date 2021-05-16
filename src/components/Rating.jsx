import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <span>{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.oneOfType(
    PropTypes.number,
    PropTypes.string,
    PropTypes.func,
  ).isRequired,
};

export default Rating;
