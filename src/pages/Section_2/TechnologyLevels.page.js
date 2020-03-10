import React from 'react';

import Page from '../../components/page/page.component';
import {
  Wrapper,
  Trigger,
  Panel,
  Transform
} from '../../components/panel/panelManager.component';
import Progress from '../../components/progress/progress.component';
import LifestyleNeeds from '../../components/sections/technologyLevels/lifestyleNeeds.component';
import AIFeatures from '../../components/sections/technologyLevels/aiFeatures.component';
import AssessmentError from '../../components/assessmentError/assessmentError.component';
import Content from '../../components/content/content.component';
import Shelf from '../../components/shelf/shelf.component';
import Heading from '../../components/heading/heading.component';

const TechonologyLevelsPage = ({ completed, questions }) => (
  <Page>
    <Content>
      {completed ? (
        <>
          <Shelf xlarge>
            <Heading large blue>
              Your best fit
            </Heading>
          </Shelf>

          <Wrapper>
            <Shelf xlarge>
              <Panel>
                <LifestyleNeeds questions={questions} />
              </Panel>
              <Panel>
                <AIFeatures questions={questions} />
              </Panel>
            </Shelf>
            <div className="pill pill_with2">
              <Trigger className="pill-item">
                <span className="pill-item-text">Lifestyle Needs</span>
              </Trigger>
              <Trigger className="pill-item">
                <span className="pill-item-text"> AI Features</span>
              </Trigger>
              <Transform />
            </div>
          </Wrapper>
        </>
      ) : (
        <AssessmentError />
      )}
    </Content>
    <Progress text="Next" goTo={'/hearing-aid-transition'} />
  </Page>
);

export default TechonologyLevelsPage;
