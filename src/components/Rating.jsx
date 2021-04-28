import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;
  return (
    <p className="rating">{ rating }</p>
  );
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number,
};
// Mudanca feita pois o npm rum alegava erro, https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// site em que aprendi a utilizar o defaultProps
Rating.defaultProps = {
  rating: undefined,
};
