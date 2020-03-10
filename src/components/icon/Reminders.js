import React from 'react';

const SVG = ({
  style = {},
  fill = '#00a3e0',
  width = '29.7',
  height = '25.6',
  className = '',
  viewBox = '0 0 29.7 25.6'
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
      d="M29.02,0H.692A.691.691,0,0,0,0,.692V19.808a.691.691,0,0,0,.692.692H6.645v4.409a.7.7,0,0,0,.426.639.79.79,0,0,0,.266.053.676.676,0,0,0,.49-.2L12.8,20.5H29.009a.691.691,0,0,0,.692-.692V.692A.675.675,0,0,0,29.02,0Zm-.692,19.116h-15.8a.7.7,0,0,0-.49.2L8.04,23.259v-3.44a.691.691,0,0,0-.692-.692H1.384V1.384H28.328Z"
      transform="translate(0 0)"
      fill={fill}
    />
    <path
      d="M4.872,8.774H24.308a.692.692,0,0,0,0-1.384H4.872a.692.692,0,0,0,0,1.384Z"
      transform="translate(0.272 0.48)"
      fill={fill}
    />
    <path
      d="M4.872,5.7H24.308a.692.692,0,0,0,0-1.384H4.872a.692.692,0,0,0,0,1.384Z"
      transform="translate(0.272 0.281)"
      fill={fill}
    />
    <path
      d="M4.872,11.834H24.308a.692.692,0,0,0,0-1.384H4.872a.692.692,0,0,0,0,1.384Z"
      transform="translate(0.272 0.679)"
      fill={fill}
    />
    <path
      d="M4.872,14.9h8.136a.692.692,0,0,0,0-1.384H4.872a.692.692,0,0,0,0,1.384Z"
      transform="translate(0.272 0.878)"
      fill={fill}
    />
  </svg>
);

export default SVG;
