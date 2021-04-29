import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <section className="rating">
      { rating }
    </section>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
