// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <span className="rating">{ rating }</span>;
  }
}

// Referencia https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};
export default Rating;
