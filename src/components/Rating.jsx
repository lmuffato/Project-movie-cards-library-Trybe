// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => (<div className="rating">{ rating }</div>);

Rating.prototype = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
