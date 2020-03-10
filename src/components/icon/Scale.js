import React from 'react';

const SVG = ({
  style = {},
  fill = '#AAAAAA',
  width = '70.73',
  height = '73.07',
  className = '',
  viewBox = '0 0 70.73 73.07'
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
      d="M59.951,5.5H48.445A17.517,17.517,0,0,0,35.366,0a17.786,17.786,0,0,0-13,5.5H10.777A10.786,10.786,0,0,0,0,16.28V62.29A10.786,10.786,0,0,0,10.777,73.067H59.951A10.786,10.786,0,0,0,70.729,62.29V16.28A10.786,10.786,0,0,0,59.951,5.5ZM19.107,18.986c2.518,2.481,9.289,3.052,15,3.052.2,0,.4,0,.592,0,.017,0,.038,0,.054,0s.038,0,.058,0c.192,0,.392,0,.58,0,.984-.013,1.943-.021,2.868-.029,7.792-.05,14.517-.1,14.513-5.841,0-.025,0-.246,0-.271-.038-.6-.1-1.188-.192-1.764h4.849c3.448,0,5.057,1.605,5.057,5.057V59.389c0,3.448-1.609,5.053-5.057,5.053H13.308c-3.448,0-5.057-1.605-5.057-5.053V19.182c0-3.448,1.605-5.057,5.057-5.057h4.828a16.684,16.684,0,0,0-.175,1.784v.05l0,.4A3.628,3.628,0,0,0,19.107,18.986ZM35.366,3.081A14.488,14.488,0,0,1,46.285,7.729a1.565,1.565,0,0,0,.471.559,13.455,13.455,0,0,1,2.927,7.7l.008.375c0,2.356-4.353,2.506-11.457,2.551-.463,0-.938,0-1.417.008L39.761,8.893a1.542,1.542,0,0,0-2.96-.867L33.595,18.949c-7.475-.042-11.265-1.117-12.328-2.164-.229-.229-.229-.363-.229-.4l0-.375a12.959,12.959,0,0,1,3.093-7.859A1.522,1.522,0,0,0,24.264,8,14.682,14.682,0,0,1,35.366,3.081ZM67.643,62.29a7.7,7.7,0,0,1-7.692,7.692H10.777A7.7,7.7,0,0,1,3.085,62.29V16.28a7.7,7.7,0,0,1,7.692-7.692h9.305a16.341,16.341,0,0,0-1.155,2.46h-5.62c-5.174,0-8.142,2.964-8.142,8.138V59.393c0,5.174,2.964,8.138,8.142,8.138H57.425c5.174,0,8.142-2.964,8.142-8.138V19.182c0-5.174-2.964-8.138-8.142-8.138H51.793a16.618,16.618,0,0,0-1.117-2.46h9.28a7.7,7.7,0,0,1,7.692,7.692V62.29Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
