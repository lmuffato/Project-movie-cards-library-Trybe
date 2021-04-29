import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;

  return (
    <div>
      <p className="rating">{ rating }</p>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 10,
};

export default Rating;
