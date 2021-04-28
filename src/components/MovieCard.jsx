// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={imagePath} alt="magem do filme" />
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
