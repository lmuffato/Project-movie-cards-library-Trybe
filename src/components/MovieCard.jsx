import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  const { movieInfo: { imagePath, title, subtitle, storyline, rating } } = props;

  return (
    <body className="movie-card-body">
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ `foto ${title}` } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <p>{ rating }</p>
      </div>
    </body>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
