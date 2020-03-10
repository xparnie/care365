import React from 'react';

import Audiogram from '../components/audiogram/audiogram.component';
import Content from '../components/content/content.component';
import Page from '../components/page/page.component';
import Progress from '../components/progress/progress.component';

const AudiogramPage = ({ currentHearingLoss }) => (
  <Page>
    <Content>
      <Audiogram currentHearingLoss={currentHearingLoss} />
    </Content>
    <Progress text="Next" goTo={'/types-of-hearing-loss'} />
  </Page>
);

export default AudiogramPage;
