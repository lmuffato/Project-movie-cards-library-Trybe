import React from 'react';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { moviesList: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <img src={ imagePath } alt={ title } />
      </section>
    );
  }
}

// MovieList.protoType = {
//   title: PropTypes.string.isRequireds,
//   subtitle: PropTypes.string.isRequireds,
//   storyline: PropTypes.string.isRequireds,
//   rating: PropTypes.number.isRequireds,
//   imagePath: PropTypes.string.isRequireds,
// };

export default MovieList;
