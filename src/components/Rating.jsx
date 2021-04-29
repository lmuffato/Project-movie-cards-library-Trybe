// implement Rating component here
import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{rating}</div>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
