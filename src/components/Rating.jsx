// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { nota } = props;
  return (
    <p className="rating">{nota}</p>
  );
}

Rating.propTypes = {
  nota: PropTypes.number.isRequired,
};

export default Rating;
