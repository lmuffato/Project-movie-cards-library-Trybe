// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <p>{ rating }</p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
