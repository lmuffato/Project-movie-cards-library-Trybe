// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div className="rating">{value}</div>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
