import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <section className="rating">
      { rating }
    </section>
  );
}

Rating.defaultProps = {
  rating: 0,
};
Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;

// requisito construido com a ajuda do colega Rafael Medeiros
