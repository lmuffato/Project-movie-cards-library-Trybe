import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;
  return (
    <h1 className="rating">
      { rating }
    </h1>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default Rating;
