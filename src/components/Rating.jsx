// implement Rating component here

import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>
          Rate:
          { rating }
        </p>
      </div>
    );
  }
}

Rating.propTypes = rating.string;

export default Rating;
