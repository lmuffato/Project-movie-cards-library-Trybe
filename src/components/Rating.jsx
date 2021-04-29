import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => (
  <span className="rating">{rating}</span>
);

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
