// implement Rating component here
import React from 'react';

class Rating extends React.Componet {
  render() {
      const { rating } = this.props;
    return (
      <div className='rating'>{rating}</div>
    );    
  };
};

export default Rating;