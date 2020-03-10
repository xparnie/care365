import React from 'react';

import Page from '../components/page/page.component';
import Progress from '../components/progress/progress.component';
import Challenges from '../components/challenges/challenges.component'

const ResultsChallenges = ({ completed, challengeCompleted, questions, selection }) => (
  <Page>
    {/* <Results completed={completed} questions={questions} />
    {challengeCompleted && <Progress goTo={'/hearing-test'} />} */}

    <Challenges 
      challenges={questions[4].answers} 
      completed={completed}  
      selection={selection}
    />
    {challengeCompleted && <Progress goTo={'/hearing-test'} />}
  </Page>
);

export default ResultsChallenges;
