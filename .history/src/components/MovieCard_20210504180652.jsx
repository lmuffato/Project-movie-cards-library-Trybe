import React from 'react';
class MovieCard extends React.Component {
  render() {
    const { camisetaConfortavel: {imagePath, title, subtitle, storyline} } = this.props;
    return(
      <section>
        <img src={imagePath} />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
      </section>
    );
  }
}
export default MovieCard;
