// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movies;

    return (
      <div className="MovieCard">
        <img src={ imagePath } width={ 200 } alt={ `${title} card` } />
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </div>
        <div>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
