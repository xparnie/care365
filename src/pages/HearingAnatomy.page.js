import React from 'react';

import Heading from '../components/heading/heading.component';
import Content from '../components/content/content.component';
import Shelf from '../components/shelf/shelf.component';
import Page from '../components/page/page.component';
import Progress from '../components/progress/progress.component';

const HearingAnatomyPage = () => (
  <Page>
    <Content>
      <Shelf xlarge>
        <Heading large blue>
          Anatomy of Hearing
        </Heading>
      </Shelf>
      <Shelf xlarge>
        <div style={{ maxWidth: '722px', margin: 'auto' }}>
          <img src="../images/anatomy.png" alt="" />
        </div>
      </Shelf>
      <Shelf>
        <Progress text="Next" goTo={'/hearing-loss'} />
      </Shelf>
    </Content>
  </Page>
);

export default HearingAnatomyPage;
