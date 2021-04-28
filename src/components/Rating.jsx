// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <h6 className="rating">{this.props.rating}</h6>
    );
  }
}

export default Rating;