import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title } = this.props.movie;
    return (
      <section>
        <h4>{title}</h4>
      </section>
    );
  }
}

export default MovieCard;
