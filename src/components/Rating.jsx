import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;
  return (
    <div className="movie-card-rating">
      <p className="rating">{ rating }</p>
    </div>
  );
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
