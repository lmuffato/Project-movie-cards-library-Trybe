import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <div className="movie-card">
        <img className="movie-img" src={imagePath} alt="Movie Image"/>
      </div>
    );
  }
}

export default MovieCard;
