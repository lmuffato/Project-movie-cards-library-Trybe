// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const { rating } = props;
  return (
    <p className="rating">{rating}</p>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
