// implement Rating component here
import React from 'react';
import Proptypes from 'prop-types';

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
