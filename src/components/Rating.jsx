// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    console.log((this.props));
    const { rating } = this.props;
    return (
      <h6 className="rating">
        {rating}
      </h6>
    );
  }
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
