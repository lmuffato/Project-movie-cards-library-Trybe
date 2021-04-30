// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <section className='movie-card'>
        <img className='movie-card-image' src={imagePath}></img>
        <div className='movie-card-body'>
          <h4 className='movie-card-title'>{title}</h4>
          <h5 className='movie-card-subtitle'>{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        
        <div className='movie-card-rating'>
          <p className='rating'>{rating}</p>
        </div>
      </section>
    );
  };
};

export default MovieCard;