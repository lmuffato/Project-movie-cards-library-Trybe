import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  return (
    <span>{ props.rating }</span>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
