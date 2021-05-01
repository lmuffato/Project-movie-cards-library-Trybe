import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;

  return (
    <div className="rating">
      <p>
        {' '}
        { rating }
        {' '}
      </p>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
