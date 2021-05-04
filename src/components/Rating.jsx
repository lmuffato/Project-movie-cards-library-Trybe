import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    // const { movie } = this.props;
    // const { rating } = movie;
    const { rating } = this.props;
    return (<span className="rating">{rating}</span>);
  }
}

Rating.propTypes = {
  // movie: PropTypes.shape({
  //   rating: PropTypes.number.isRequired,
  // }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Rating;
