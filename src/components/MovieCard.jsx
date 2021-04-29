// implement MovieCard component here
import propTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <li>
            <h4 className="movie-card-title">
              {title}
            </h4>
          </li>
          <li>
            <h5 className="movie-card-subtitle">
              {subtitle}
            </h5>
          </li>
          <li>
            <p className="movie-card-storyline">
              {storyline}
            </p>
          </li>
          <img src={ imagePath } alt="imagem" className="movie-card-image" />
          <li>
            <Rating rating={ rating } className="rating" />
          </li>
        </div>
      </section>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
  }).isRequired,
};
