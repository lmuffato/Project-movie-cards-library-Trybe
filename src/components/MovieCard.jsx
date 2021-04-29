// implement MovieCard component here
import React from 'react';
// import Image from './Image';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // console.log(this.props.movieObj.title);
    const { movie } = this.props;
    return (
      <div className='movie-card'>
        <img src={movie.imagePath} alt={movie.title}></img>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyLine: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

export default MovieCard;

