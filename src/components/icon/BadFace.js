import React from 'react';

const SVG = ({
  style = {},
  fill = '#FFFFFF',
  width = '85',
  height = '85',
  className = '',
  viewBox = '0 0 85 85'
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
    <g transform="translate(500.155 -91.285)">
      <path
        d="M-460.627,117.3c-1.531-5.434-7.608-9.491-14.877-9.491s-13.346,4.058-14.874,9.491"
        transform="translate(17.348 32.404)"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <circle
        cx="40"
        cy="40"
        r="40"
        transform="translate(-498.155 93.285)"
        strokeWidth="4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x2="9.935"
        transform="translate(-476.315 122.297)"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <line
        x2="9.935"
        transform="translate(-449.614 122.297)"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </g>
  </svg>
);

export default SVG;
