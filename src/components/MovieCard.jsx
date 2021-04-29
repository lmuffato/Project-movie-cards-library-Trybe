import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../MovieCard.css';

class MovieCard extends React.Component {
  render() {

    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;

    return (
      <div className="c-MovieCard">
        <img className="c-MovieCard__img" src={ imagePath } alt="movie" />
        <h4 className="c-MovieCard__title">{title}</h4>
        <h5 className="c-MovieCard__subtitle">{subtitle}</h5>
        <p className="c-MovieCard__storyline">{storyline}</p>
        <Rating rating={ rating.toString() } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
