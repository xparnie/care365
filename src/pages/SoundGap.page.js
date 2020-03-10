import React from 'react';

import Progress from '../components/progress/progress.component';
import Page from '../components/page/page.component';
import Copy from '../components/copy/copy.component';
import Content from '../components/content/content.component';
import Shelf from '../components/shelf/shelf.component';
import Heading from '../components/heading/heading.component';

const SoundGapPage = () => (
  <Page>
    <Content>
      <Shelf medium>
        <Heading large blue>
          Hearing Loss vs. Sound Gap
        </Heading>
      </Shelf>
      <Shelf xlarge>
        <Copy>
          A Sound Gap can occur when you hear specific sounds, <br />
          but they are challenging to understand.
        </Copy>
      </Shelf>
      <Shelf xlarge>
        <div style={{ maxWidth: '100%', margin: 'auto' }}>
          <img src="../images/sound-gap2.png" alt="" />
        </div>
      </Shelf>
      <Shelf>
        <Progress text="Next" goTo={'/impacts-of-hearing-loss-two'} />
      </Shelf>
    </Content>
  </Page>
);

export default SoundGapPage;
