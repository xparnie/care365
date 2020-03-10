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
    <g transform="translate(445.923 -91.285)">
      <path
        d="M-519.6,131.636l3.852,4.825,3.846-4.825,3.843,4.825,3.859-4.825,3.866,4.825,3.869-4.825,3.87,4.825,3.85-4.825"
        transform="translate(-908.666 280.361) rotate(180)"
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
        transform="translate(-443.923 93.285)"
        strokeWidth="4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x2="9.935"
        transform="translate(-422.082 122.297)"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <line
        x2="9.935"
        transform="translate(-395.382 122.297)"
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
