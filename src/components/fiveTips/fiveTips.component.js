import React from 'react';

import FiveTipsSlider from './sliders/fiveTips.slider';

import Shelf from '../shelf/shelf.component';
import Heading from '../heading/heading.component';

import './fiveTips.styles.scss';

const FiveTips = () => (
  <>
    <Shelf xlarge>
      <Shelf xlarge>
        <Heading large blue>
          Adjusting to Your Hearing Aids
        </Heading>
      </Shelf>
      <div className="fiveTips">
        <FiveTipsSlider />
      </div>
    </Shelf>
  </>
);

export default FiveTips;
