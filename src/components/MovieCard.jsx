// implement MovieCard component here
import propTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <li>
          <h4>
            {title}
          </h4>
        </li>
        <li>
          <h5>
            {subtitle}
          </h5>
        </li>
        <li>
          <p>
            {storyline}
          </p>
        </li>
        <li>
          <Rating rating={ rating } />
        </li>
        <img src={ imagePath } alt="imagem" />
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
