import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (

      <div className="movie-card">
        <img src={ imagePath } alt="imagem do filme" className="movie-card-image" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle ">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } className="movie-card-rating" />

      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
