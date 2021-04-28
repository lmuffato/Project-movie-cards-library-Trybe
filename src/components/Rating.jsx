import PropTypes from 'prop-types';

function Rating(props) {
  return props.rating;
}

Rating.propsTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
