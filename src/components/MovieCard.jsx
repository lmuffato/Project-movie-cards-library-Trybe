// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
// import Rating from './Rating';

function MovieCard(props) {
  const { title, subtitle, storyline, imagePath } = props.filmes;
  return (
    <div className="movie-card ">
      <div className="movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt="" />
        <h4 className="movie-card-title ">{title}</h4>
        <h5 className="movie-card-subtitle " movie-card-subtitle>{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        {/* <Rating rating ={ rating } /> */}
      </div>
    </div>
  );
}
MovieCard.propTypes = {
  filmes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieCard;
