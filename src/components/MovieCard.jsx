import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
      const { title, subtitle, storyline, rating, imagePath } = this.props.movie
      return(
        <section className='movie-card'>
          <img className='movie-card-image' src={ imagePath } alt="movie"/>
          <div className='movie-card-body'>
            <h4 className='movie-card-title'>{ title }</h4>
            <h5 className='movie-card-subtitle'>{ subtitle }</h5>
            <p className='movie-card-storyline'>{ storyline }</p>
          </div>
          <Rating rating={ rating }/>
        </section>
      );
  }
}

export default MovieCard;
