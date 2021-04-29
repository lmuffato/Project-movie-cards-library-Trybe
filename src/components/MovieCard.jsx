// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-carg-image" src={ imagePath } alt={ `${title}` } />
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-storyline">{ subtitle }</h5>
          <p>{ storyline }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
