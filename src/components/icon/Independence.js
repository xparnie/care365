import React from 'react';

const SVG = ({
  style = {},
  fill = '#AAAAAA',
  width = '63.89',
  height = '88.93',
  className = '',
  viewBox = '0 0 63.89 88.93'
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
    <g transform="translate(-238.101 -238.629)">
      <g transform="translate(238.101 255.161)">
        <path
          d="M8.1,15.4a9.478,9.478,0,0,1-4.784-1.287,7.662,7.662,0,0,1-1.578-1.23A7.212,7.212,0,0,1-4.062,15.4c-4.038,0-8.213-2.614-8.213-6.989l.555-39.825L-25.923-43.6c-4.433-2.687-4.784-6.98-3.216-9.858A6.742,6.742,0,0,1-19.5-55.871a55.489,55.489,0,0,1,9.435,6.964c3.622,3.179,5.613,4.931,11.9,4.963h.15c5.9,0,8.015-1.776,11.827-4.978a63.732,63.732,0,0,1,9.645-6.948c4.107-2.394,7.924-.662,9.57,2.284,1.607,2.876,1.278,7.246-3.246,10.048L14.74-31.387,15.379,8.38A6.526,6.526,0,0,1,12.3,14.3a8.083,8.083,0,0,1-4.2,1.1M3.213,8a1.788,1.788,0,0,1,.046.406,3.152,3.152,0,0,0,1.734,2.675,5.833,5.833,0,0,0,5.6.21,3.025,3.025,0,0,0,1.418-2.863L11.356-32.2a1.774,1.774,0,0,1,.65-1.409L27.881-46.419c2.923-1.825,3-4.038,2.229-5.416-.79-1.416-2.69-2.333-5-.99a59.987,59.987,0,0,0-9.17,6.616c-4.005,3.366-7,5.809-14.12,5.759C-5.69-40.487-8.437-42.9-12.24-46.241a51.961,51.961,0,0,0-8.908-6.584c-2.332-1.357-4.253-.389-5.056,1.084-.753,1.383-.661,3.571,2.078,5.181a1.781,1.781,0,0,1,.244.174L-8.949-33.574a1.78,1.78,0,0,1,.61,1.371L-8.905,8.434c0,2.134,2.515,3.469,4.843,3.469,1.175,0,3.9-.339,3.9-3.494v-21.6A1.718,1.718,0,0,1,1.527-14.94a1.718,1.718,0,0,1,1.686,1.748Z"
          transform="translate(29.988 56.998)"
          fill={fill}
        />
      </g>
      <g transform="translate(257.681 238.629)">
        <path
          d="M2.632,5.456A12.615,12.615,0,0,1-9.737-7.365,12.616,12.616,0,0,1,2.632-20.187,12.614,12.614,0,0,1,15-7.365,12.614,12.614,0,0,1,2.632,5.456m0-22.148a9.177,9.177,0,0,0-9,9.328,9.177,9.177,0,0,0,9,9.326,9.176,9.176,0,0,0,8.995-9.326,9.176,9.176,0,0,0-8.995-9.328"
          transform="translate(9.737 20.187)"
          fill={fill}
        />
      </g>
    </g>
  </svg>
);

export default SVG;
