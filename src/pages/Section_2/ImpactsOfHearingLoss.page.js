import React from 'react';

import Page from '../../components/page/page.component';
import Impacts from '../../components/impacts/impacts.component';
import Progress from '../../components/progress/progress.component';
import Content from '../../components/content/content.component';

const ImpactsOfHearingPage = ({ questions }) => (
  <Page>
    <Content flipped>
      <Impacts questions={questions} highlight />
    </Content>
    <Progress text="Next" goTo="/technology-levels" />
  </Page>
);

export default ImpactsOfHearingPage;
