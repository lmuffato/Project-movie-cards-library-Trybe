import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const { rating } = props;
  return <p className="rating">{rating}</p>;
};

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
