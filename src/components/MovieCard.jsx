import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;

    return (
      <div>
        <div>
          <h1>{title}</h1>
          <h1>{subtitle}</h1>
          <p>{storyline}</p>
        </div>
        <img src={ imagePath } alt={ `${title}` } />
      </div>
    );
  }
}

export default MovieCard;
