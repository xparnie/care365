import React from 'react';

const SVG = ({
  style = {},
  fill = '#AAAAAA',
  width = '79.83',
  height = '67.47',
  className = '',
  viewBox = '0 0 79.83 67.47'
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
    <g transform="translate(-35.088 76.734)">
      <g>
        <g transform="translate(55.052 -12.551)">
          <path
            d="M8.161.7H-28.453A1.643,1.643,0,0,1-30.095-.942a1.642,1.642,0,0,1,1.642-1.642H8.161A1.642,1.642,0,0,1,9.8-.942,1.643,1.643,0,0,1,8.161.7"
            transform="translate(30.095 2.584)"
            fill={fill}
          />
        </g>
        <g transform="translate(67.124 -23.282)">
          <path
            d="M.35,2.7A1.643,1.643,0,0,1-1.292,1.057V-8.312A1.643,1.643,0,0,1,.35-9.954,1.643,1.643,0,0,1,1.993-8.312V1.057A1.643,1.643,0,0,1,.35,2.7"
            transform="translate(1.292 9.954)"
            fill={fill}
          />
        </g>
        <g transform="translate(79.592 -23.282)">
          <path
            d="M.35,2.7A1.642,1.642,0,0,1-1.292,1.057V-8.312A1.642,1.642,0,0,1,.35-9.954,1.643,1.643,0,0,1,1.993-8.312V1.057A1.643,1.643,0,0,1,.35,2.7"
            transform="translate(1.292 9.954)"
            fill={fill}
          />
        </g>
        <g transform="translate(35.087 -76.734)">
          <path
            d="M15.765,12.133H-52.2A5.937,5.937,0,0,1-58.132,6.2V-38.81A5.937,5.937,0,0,1-52.2-44.739H15.765a5.937,5.937,0,0,1,5.929,5.929V6.2a5.937,5.937,0,0,1-5.929,5.929M-52.2-41.453a2.645,2.645,0,0,0-2.644,2.643V6.2A2.646,2.646,0,0,0-52.2,8.848H15.765A2.646,2.646,0,0,0,18.409,6.2V-38.81a2.645,2.645,0,0,0-2.644-2.643ZM-18.19-.264A16.037,16.037,0,0,1-32.1-8.275a15.924,15.924,0,0,1-1.6-12.164,15.934,15.934,0,0,1,7.468-9.731A16.046,16.046,0,0,1-4.337-24.3,16.049,16.049,0,0,1-10.2-2.407,15.943,15.943,0,0,1-18.19-.264m-.05-28.775a12.692,12.692,0,0,0-6.352,1.712,12.661,12.661,0,0,0-5.938,7.739,12.665,12.665,0,0,0,1.272,9.67,12.761,12.761,0,0,0,17.41,4.665A12.761,12.761,0,0,0-7.182-22.661,12.658,12.658,0,0,0-14.921-28.6a12.823,12.823,0,0,0-3.319-.439m-7.173.29h.02Zm2.489,22.021a1.631,1.631,0,0,1-.821-.22,1.643,1.643,0,0,1-.821-1.422V-23.313a1.643,1.643,0,0,1,.821-1.422,1.635,1.635,0,0,1,1.642,0l12.941,7.471a1.64,1.64,0,0,1,.821,1.422,1.639,1.639,0,0,1-.821,1.422L-22.1-6.948a1.631,1.631,0,0,1-.821.22m1.642-13.74v9.253l8.012-4.627Z"
            transform="translate(58.132 44.739)"
            fill={fill}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVG;
