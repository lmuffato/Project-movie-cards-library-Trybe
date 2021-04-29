import React from 'react';
import PropTypes from 'prop-types';

export default function Rating({ rating }) {
  return (
    <div className="rating">{ rating }</div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};
