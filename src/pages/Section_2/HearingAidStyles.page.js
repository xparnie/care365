import React from 'react';

import Page from '../../components/page/page.component';
import HearingStyles from '../../components/hearingStyles/hearingStyles.component';
import Progress from '../../components/progress/progress.component';
import Content from '../../components/content/content.component';

const HearingAidStylesPage = () => (
  <Page>
    <Content>
      <HearingStyles />
    </Content>
    <Progress goTo={'/accessories'} />
  </Page>
);

export default HearingAidStylesPage;
