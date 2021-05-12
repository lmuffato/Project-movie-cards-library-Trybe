import React from 'react';
import { number } from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <span className="rating">{ rating }</span>;
  }
}

Rating.propTypes = {
  rating: number,
}.isRequired;

export default Rating;
