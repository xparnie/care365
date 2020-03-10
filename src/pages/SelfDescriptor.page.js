import React from 'react';

import Picker from '../components/picker/picker.component';
import Progress from '../components/progress/progress.component';
import Page from '../components/page/page.component';
import Content from '../components/content/content.component';
import Shelf from '../components/shelf/shelf.component';
import Heading from '../components/heading/heading.component';

const SelfDescriptor = ({ question }) => (
  <Page>
    <Content>
      <Shelf xlarge>
        <Heading small>
          1. Please select the top 3 options
          <br /> that best describe you.
        </Heading>
      </Shelf>
      <Picker question={question} />
      {question.completed && <Progress goTo={'/favorite-activities'} />}
    </Content>
  </Page>
);

export default SelfDescriptor;
