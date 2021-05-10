import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>{rating}</p>
      </div>
    );
  }
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
