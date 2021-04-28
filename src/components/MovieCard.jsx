import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {
      title,
      subtitle,
      storyline,
      imagePath,
      rating
    } = this.props.movie
    
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <img src={imagePath} />
        {/* <Rating rating={ rating } /> */}
      </div>
    );
  };
};

export default MovieCard;
