import './MovieCard.css';
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { Movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt={ title } />
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <div>
          <p>rating</p>
        </div>
      </section>

    );
  }
}

MovieCard.propTypes = {
  Movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
