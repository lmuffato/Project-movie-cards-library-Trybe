import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component { // requistos 12 e 14
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">
        <p className="rating">{ rating }</p>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
