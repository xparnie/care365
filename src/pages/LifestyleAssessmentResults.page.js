import React from 'react';

import Page from '../components/page/page.component';
import Progress from '../components/progress/progress.component';
import Results from '../components/results/results.component';

const LifestyleAssessmentResults = ({ completed, questions }) => (
  <Page>
    <Results completed={completed} questions={questions} />
    {completed && <Progress text="Next" goTo={'/your-story'} />}
  </Page>
);

export default LifestyleAssessmentResults;
