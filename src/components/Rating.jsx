import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;

  return (
    <div className="rating">
      { rating }
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
