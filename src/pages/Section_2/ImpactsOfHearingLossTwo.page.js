import React from 'react';

import Page from '../../components/page/page.component';
import Impacts from '../../components/impacts/impacts.component';
import Progress from '../../components/progress/progress.component';
import Content from '../../components/content/content.component';

const ImpactsOfHearingPageTwo = ({ questions }) => (
  <Page>
    <Content flipped>
      <Impacts questions={questions} />
    </Content>
    <Progress text="Next" goTo="/self-descriptor" />
  </Page>
);

export default ImpactsOfHearingPageTwo;
