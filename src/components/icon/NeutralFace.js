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
    <g transform="translate(551.388 -91.285)">
      <path
        d="M-531.1,101.493a2.494,2.494,0,0,1,2.494,2.5,2.494,2.494,0,0,1-2.494,2.494,2.5,2.5,0,0,1-2.494-2.494,2.5,2.5,0,0,1,2.494-2.5Z"
        transform="translate(35.223 18.309)"
        fill={fill}
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M-539.434,101.493a2.5,2.5,0,0,1,2.494,2.5,2.5,2.5,0,0,1-2.494,2.494,2.5,2.5,0,0,1-2.494-2.494,2.5,2.5,0,0,1,2.494-2.5Z"
        transform="translate(16.64 18.309)"
        fill={fill}
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M-541.611,109.531h29.751"
        transform="translate(17.347 36.238)"
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
        transform="translate(-549.388 93.285)"
        strokeWidth="4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  </svg>
);

export default SVG;
