import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCard(props) {
  const { title, subtitle } = props;

  return (
    <>
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
    </>
  );
}

MovieCard.defaultProps = {
  title: 'Título do filme',
  subtitle: 'Subtítulo do filme',
};

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
