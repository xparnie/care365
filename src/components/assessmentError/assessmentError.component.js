import React from 'react';

import Button from '../button/button.component';
import Shelf from '../shelf/shelf.component';
import Heading from '../heading/heading.component';

const AssessmentError = () => (
  <>
    <Shelf xlarge>
      <Heading medium>
        Please return to the beginning <br />
        to take the assessment in full.
      </Heading>
    </Shelf>

    <Button link={'/lifestyle-assessment'}>Return to Assessment</Button>
  </>
);

export default AssessmentError;
