import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { eachMovie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = eachMovie;

    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt={ title } />
          <h3 className="movie-card-title">{ title }</h3>
          <h2 className="movie-card-subtitle">{ subtitle }</h2>
          <p className="movie-card-storyline">{ storyline }</p>
          <p className="rating">{ rating }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  eachMovie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
