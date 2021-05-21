import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {title, subtitle, storyline, rating, imagePath} = movie;
    return (
      <div>
        <h4> { title } </h4>
        <h5> { subtitle } </h5>
        <p> { storyline } </p>
        <Rating rating={ rating } />
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
