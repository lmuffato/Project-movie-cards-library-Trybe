import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;
  return (
    <p className="rating">{ rating }</p>
  );
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
