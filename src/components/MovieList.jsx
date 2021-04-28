import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="container">
        {list.map((movie, index) => <MovieCard key={ index } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
MovieList.defaultProps = {
  list: [],
};
