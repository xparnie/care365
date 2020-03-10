import React from 'react';

const SVG = ({
  style = {},
  fill = '#00a3e0',
  width = '19.7',
  height = '33.6',
  className = '',
  viewBox = '0 0 19.7 33.6'
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
    <g>
      <path
        d="M16.706,33.6H3A2.993,2.993,0,0,1,0,30.61V2.985A2.993,2.993,0,0,1,3,0H16.706a3,3,0,0,1,3,2.985V30.6A3.011,3.011,0,0,1,16.706,33.6ZM3,1.6A1.391,1.391,0,0,0,1.608,3V30.61A1.4,1.4,0,0,0,3,32.011H16.706a1.391,1.391,0,0,0,1.389-1.4V2.985a1.4,1.4,0,0,0-1.389-1.4H3Z"
        fill={fill}
      />
      <rect
        width="18.095"
        height="1.596"
        transform="translate(0.804 3.266)"
        fill={fill}
      />
      <rect
        width="18.095"
        height="1.596"
        transform="translate(0.804 25.955)"
        fill={fill}
      />
      <path
        d="M6.946,19.447h0a.788.788,0,0,1-.658-.353L3.814,15.45a.8.8,0,1,1,1.316-.9l1.816,2.669,6.007-8.835a.8.8,0,1,1,1.316.9L7.6,19.106A.777.777,0,0,1,6.946,19.447Z"
        transform="translate(0.804 1.756)"
        fill={fill}
      />
    </g>
    <path
      d="M9.906,25.344H7.054a.792.792,0,1,1,0-1.584H9.906a.792.792,0,1,1,0,1.584Z"
      transform="translate(1.366 5.193)"
      fill={fill}
    />
  </svg>
);

export default SVG;
