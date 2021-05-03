import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}
Rating.defaultProps = {
  rating: 4.5,
};

Rating.propTypes = {
  rating: PropTypes.number,
};
export default Rating;
