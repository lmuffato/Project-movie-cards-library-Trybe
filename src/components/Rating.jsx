import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    // console.log(typeof rating.toString());
    return (
      <span className="c-MovieCard__rating">{ rating.toString() }</span>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.string,
};

Rating.defaultProps = {
  rating: 0,
};
