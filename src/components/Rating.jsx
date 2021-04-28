import React from 'react';

function Rating(prop) {
  const { rating } = prop;
  return (
    <div className="movie-card-rating">
      <p className="rating">{ rating }</p>
    </div>
  );
}

export default Rating;
