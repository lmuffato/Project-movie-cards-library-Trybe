import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    // console.log(this.props.rating);
    return (
      <div>
        <p>{rating}</p>
      </div>
    );
  }
}

Rating.defaultProps = {
  rating: 3,
};

Rating.propTypes = {
  rating: PropTypes.number,
};
export default Rating;
