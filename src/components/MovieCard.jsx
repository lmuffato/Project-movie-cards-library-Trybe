import React from 'react';
import Proptypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating }  = movie;
    return (
        <div>
            <img src={ imagePath } alt={ title } />
            <h4> { title } </h4>
            <h5> { subtitle } </h5>
        </div>
      )
  }
}

MovieCard.proptype = {
    movie: Proptypes.shape({
        title: Proptypes.string.isRequired,
        subtitle: Proptypes.string.isRequired,
        storyline: Proptypes.string.isRequired,
        imagePath: Proptypes.string.isRequired,
        rating: Proptypes.string.isRequired,
    }).isRequired,
}

export default MovieCard;