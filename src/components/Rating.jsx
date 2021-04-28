// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <div className="rating">
      {rating}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default Rating;
