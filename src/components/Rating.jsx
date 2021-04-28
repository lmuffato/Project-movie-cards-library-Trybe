import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component { // requisto 12 -- prop e elemento p - requisito 14
  render() {
    const { rating } = this.props;
    return (
      <section>
        <p className="rating">{ rating }</p>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
