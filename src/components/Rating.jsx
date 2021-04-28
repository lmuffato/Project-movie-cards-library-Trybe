// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div className="Rating">
        <p>{this.props.rating}</p>
      </div>
    )
  }
}

export default Rating;