import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <section>
      <p className="rating">{ rating }</p>
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
