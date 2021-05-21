// implement MovieCard component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Rating from './Rating';
import movies from '../data';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = movies;
    return (
      <article>
        <img src={ imagePath } alt={ `Movie Poster ${title}` } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </article>
    );
  }
}

// MovieCard.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
// };

export default MovieCard;
