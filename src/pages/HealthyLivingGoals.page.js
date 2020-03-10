import React from 'react';

import Picker from '../components/picker/picker.component';
import Progress from '../components/progress/progress.component';
import Page from '../components/page/page.component';
import Content from '../components/content/content.component';
import Shelf from '../components/shelf/shelf.component';
import Heading from '../components/heading/heading.component';

const HealthyLivingGoals = ({ question }) => (
  <Page>
    <Content>
      <Shelf xlarge>
        <Heading small>
          4. Please select the top 3 options that <br /> describe your overall
          health goals.
        </Heading>
      </Shelf>
      <Picker question={question} />
      {question.completed && <Progress goTo={'/hearing-challenges'} />}
    </Content>
  </Page>
);

export default HealthyLivingGoals;
