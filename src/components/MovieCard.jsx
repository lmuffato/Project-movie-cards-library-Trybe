import React from 'react';
import movie from '../data.js';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <div className="movie-card">
        {movie}
      </div>
    );
  }
}

export default MovieCard;
