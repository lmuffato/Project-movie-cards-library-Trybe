// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ `${title} Cover` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>

    );
  }
}

export default MovieCard;
