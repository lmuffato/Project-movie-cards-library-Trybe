import React from 'react';
class MovieCard extends React.Component {
  render() {
    const { camisetaConfortavel: {imagePath, title, subtitle, storyline} } = this.props;
    return(
      <section>
        <img src={imagePath} />
      </section>
    );
  }
}
export default MovieCard;
