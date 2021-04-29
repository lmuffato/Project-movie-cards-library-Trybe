import React from 'react';
import '../App.css';

function Rating(prop) {
  const { rating } = prop;
  return <span className="rating">{rating}</span>;
}

export default Rating;
