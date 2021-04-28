import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        { name }
      </div>
    );
  }
}

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MovieCard;
