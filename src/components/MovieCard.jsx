import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../styles/bulma/css/bulma.min.css';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="box">
        <h4 className="title ">{ title }</h4>
        <h5 className="subtitle">{ subtitle }</h5>
        <div className="columns">
          <div className="column">
            <img className="image" src={ imagePath } alt="imagem do filme" />
          </div>
          <div className="content column">
            <p>{ storyline }</p>
          </div>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};
export default MovieCard;
