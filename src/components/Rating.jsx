// implement Rating component here
// Requisito 11 e 12
import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;

  return (
    <div className="rating">{rating}</div>
  );
}

// Requisito 17
Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
