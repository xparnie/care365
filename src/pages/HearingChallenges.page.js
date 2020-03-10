import React from 'react';

import Picker from '../components/picker/picker.component';
import Progress from '../components/progress/progress.component';
import Page from '../components/page/page.component';
import Content from '../components/content/content.component';
import Shelf from '../components/shelf/shelf.component';
import Heading from '../components/heading/heading.component';

const HearingChallenges = ({ question }) => (
  <Page>
    <Content>
      <Shelf xlarge>
        <Heading small>
          5. Please select the top 3 options that represent <br /> where you
          struggle the most to hear.
        </Heading>
      </Shelf>
      <Picker question={question} />
      {question.completed && (
        <Progress goTo={'/lifestyle-assessment-results'} />
      )}
    </Content>
  </Page>
);

export default HearingChallenges;
