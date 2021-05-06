import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        {movie.rating}
        {movie.ratingThree}
      </section>
    );
  }
}

Rating.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
    ratingThree: PropTypes.number,
  }),
};

Rating.defaultProps = {
  movie: PropTypes.shape({
    rating: 0,
    ratingThree: 0,
  }),
};

export default Rating;
