import React from 'react';

import Heading from '../components/heading/heading.component';
import Content from '../components/content/content.component';
import Copy from '../components/copy/copy.component';
import Shelf from '../components/shelf/shelf.component';
import Page from '../components/page/page.component';
import Progress from '../components/progress/progress.component';
import StruggleScale from '../components/struggleScale/struggleScale.component';

import './styles/story.styles.scss';

/**
 * PATIENT STORY PAGE COMPONENT
 */
const Story = () => (
  <Page>
    <Content>
      <Shelf medium>
        <Heading blue large>
          Can you think of a time when <br />
          you would have liked to hear better?
        </Heading>
      </Shelf>
      <Shelf xlarge>
        <Copy medium>
          Please rate on a scale of 1 - 5 how much that impacted your life.
        </Copy>
      </Shelf>
      <Shelf>
        <StruggleScale />
      </Shelf>
      <Shelf>
        <Progress text="Next" goTo={'/types-of-hearing-loss-two'} />
      </Shelf>
    </Content>
  </Page>
);

export default Story;
