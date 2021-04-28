import React from 'react';
import Proptypes from 'prop-types';

class Rating extends React.Component {
  render () {
    const { rating } = this.props;
    return (
        <div>
        { rating }
        </div>
    )
  }
}

Rating.Proptypes = {
    Rating: Proptypes.string.isRequired,
}

export default Rating;