import React from 'react';
import Proptypes from 'prop-types';

// Bruno me ajudou a entender o conceito de como as Props funcionam

function Rating(props) {
  const { rating } = props;
  return (
    <section className="rating">{ rating }</section>
  );
}

Rating.propTypes = {
  rating: Proptypes.number,
}.isRequired;

export default Rating;
