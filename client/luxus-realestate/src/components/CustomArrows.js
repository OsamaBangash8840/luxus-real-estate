// CustomArrows.jsx
import React from 'react';

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: 'block', left: '10px' }}
      onClick={onClick}
    />
  );
};
