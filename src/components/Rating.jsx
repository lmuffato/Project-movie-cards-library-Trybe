import React from 'react';
import '../css/rating.css';

function Rating(prop) {
  const movies = prop;
  return (
    <div className="container-rating">
      <div className="rating">{movies.rating}</div>
    </div>
  );
}

export default Rating;
