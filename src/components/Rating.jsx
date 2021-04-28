import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;

  return (
    <p>{ rating }</p>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
