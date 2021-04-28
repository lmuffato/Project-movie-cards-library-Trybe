// implement Rating component here
import React from 'react';

function Rating(props) {
  const { nota } = props
  return (
    <p className="rating">{nota}</p>
  );
}

export default Rating;
