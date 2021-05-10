// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        <p>{ console.log(this.props) }</p>
      </section>
    );
  }
}

export default MovieList;
