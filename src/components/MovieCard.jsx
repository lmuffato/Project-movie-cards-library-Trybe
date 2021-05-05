// implement MovieCard component here
import React from 'react';
// import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    const { rating } = movieInfo;

    return (
      <div>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />

        <h4>{ movieInfo.title }</h4>

        <h5>{ movieInfo.subtitle }</h5>

        <p>
          { movieInfo.storyline }
        </p>

        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = movieInfo.object;
MovieCard.propTypes = title.string;
MovieCard.propTypes = subtitle.string;
MovieCard.propTypes = imagePath.string;
MovieCard.propTypes = storyline.string;
MovieCard.propTypes = rating.string;

export default MovieCard;
