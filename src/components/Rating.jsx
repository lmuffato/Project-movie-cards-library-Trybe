import React from 'react';

function Rating(prop) {
  const { rating } = prop;
  return (
    <p className="rating">{ rating }</p>
  );
}

export default Rating;
