import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;
  return (
    <div className="movie-card-rating ">
      <span className="rating">{rating}</span>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 3,
};

export default Rating;
