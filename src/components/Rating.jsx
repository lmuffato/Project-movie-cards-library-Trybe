import React from 'react';

class Rating extends React.Component {
    render() {
      const movieRating = this.props.rating;
      console.log(movieRating)
      
      return (
          <div>
            <p>{movieRating}</p>           
        </div>
      )
    }
  }
  

export default Rating;

