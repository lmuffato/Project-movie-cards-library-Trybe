import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating'; // Requisto 13

class MovieCard extends React.Component { // requisito 6
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section className="movie-card">
        <section className="movie-card-body">
          {/* imagem - requisito 7 */}
          <img className="movie-card-image" src={ imagePath } alt={ title } />
          {/* h4 - requisito 8 */}
          <h4 className="movie-card-title">{ title }</h4>
          {/* h5 - requisito 9 */}
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          {/* p - requisito 10 */}
          <p className="movie-card-storyline">{ storyline }</p>
          <span>
            <Rating rating={ rating } />
          </span>
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = { // requisito 17
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
