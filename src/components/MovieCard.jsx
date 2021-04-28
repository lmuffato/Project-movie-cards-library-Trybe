// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div className="MovieCard">
        <img src={imagePath} width={200} alt={`${title} card`} />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div>
          <Rating rating={rating}/>
        </div>
      </div>
      
    );
  }
}

export default MovieCard;