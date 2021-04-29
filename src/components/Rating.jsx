// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => (
  <div className="rating">
    <span>{rating}</span>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
