import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // console.log(this.props);
    const movie = {
      title: this.props.movie.title,
      subtitle: this.props.movie.subtitle,
      storyline: this.props.movie.storyline,
      imagePath: this.props.movie.imagePath,
      rating: this.props.movie.rating
    }

    return (
      <div>
        <img src={movie.imagePath} width="50%"></img>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating}/>
      </div>
    );
  }
}



export default MovieCard
