import React from 'react';

import Picker from '../components/picker/picker.component';
import Progress from '../components/progress/progress.component';
import Page from '../components/page/page.component';
import Content from '../components/content/content.component';
import Shelf from '../components/shelf/shelf.component';
import Heading from '../components/heading/heading.component';

const WellnessConcerns = ({ question }) => (
  <Page>
    <Content>
      <Shelf xlarge>
        <Heading small>
          3. Please select the top 3 options that represent <br />
          your concerns about your future well being.
        </Heading>
      </Shelf>
      <Picker question={question} />
      {question.completed && <Progress goTo={'/healthy-living-goals'} />}
    </Content>
  </Page>
);

export default WellnessConcerns;
