// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Rating(props) {
  const { rating } = props;
  return (
    <div className="rating">{ rating }</div>
  );
}
Rating.defaultProps = { rating: 0 };
Rating.propTypes = { rating: PropTypes.number };

export default Rating;
