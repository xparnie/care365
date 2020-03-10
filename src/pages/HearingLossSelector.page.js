import React from 'react';

import Page from '../components/page/page.component';
import Progress from '../components/progress/progress.component';
import HearingLoss from '../components/hearingLoss/hearingLoss.component';
import Content from '../components/content/content.component';
import Shelf from '../components/shelf/shelf.component';
import Heading from '../components/heading/heading.component';

const HearingLossSelector = () => (
  <Page>
    <Content>
      <Shelf xxlarge>
        <Heading large blue>
          Hearing Results
        </Heading>
      </Shelf>
      <Shelf xxlarge>
        <HearingLoss />
      </Shelf>
      <Progress goTo={'/audiogram'} />
    </Content>
  </Page>
);

export default HearingLossSelector;
