import React from 'react';
import '../css/rating.css';

function Rating(prop) {
  const movies = prop;
  return (
    <div className="rating">{movies.rating}</div>
  );
}

export default Rating;
