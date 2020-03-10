import React from 'react';

const SVG = ({
  style = {},
  fill = '#FFFFFF',
  width = '20',
  height = '20',
  className = '',
  viewBox = '0 0 20 20'
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      id="Icon"
      d="M8.889,20V11.111H0V8.889H8.889V0h2.222V8.889H20v2.222H11.111V20Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
