import React, { useContext, useEffect } from 'react';
import {
  assembleAssessmentData,
  assemblePatientData
} from '../../functions/data';
import { addAssessment, addPatientProfile } from '../../api';

import assessmentContext from '../../assessmentStore';

import Page from '../../components/page/page.component';
import {
  Wrapper,
  Trigger,
  Panel,
  Transform
} from '../../components/panel/panelManager.component';

import Apps from './Apps.page';
import Summary from '../../components/summary/summary.component';
import OngoingCare from '../../components/ongoingCare/ongoingCare.component';
import Content from '../../components/content/content.component';
import Shelf from '../../components/shelf/shelf.component';

const AppointmentSummaryPage = ({ active, data }) => {
  const { assessmentDispatch } = useContext(assessmentContext);

  useEffect(() => {
    addPatientProfileHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchHandler = (type, data) => {
    return assessmentDispatch({
      type,
      payload: data
    });
  };

  const addPatientProfileHandler = () => {
    addPatientProfile(assemblePatientData(data)).then(function(res1) {
      addAssessment(assembleAssessmentData(data, res1)).then(function(res2) {
        dispatchHandler('SET_ASSESSMENT_ID', res2);
      });
    });
  };

  return (
    <Page>
      <Wrapper active={active}>
        <Shelf xlarge>
          <Panel>
            <Content>
              <Summary data={data} />
            </Content>
          </Panel>
          <Panel>
            <Content>
              <OngoingCare />
            </Content>
          </Panel>
          <Panel>
            <div
              className="summary-apps-slider"
              style={{
                position: 'absolute',
                top: '48%',
                left: '50%',
                transform: 'translate(-50%, -52%)',
                width: '100%'
              }}
            >
              <Apps />
            </div>
          </Panel>
        </Shelf>
        <Content>
          <div className="pill pill_with3">
            <Trigger className="pill-item">
              <span className="pill-item-text">Results</span>
            </Trigger>
            <Trigger className="pill-item">
              <span className="pill-item-text">Care Experience</span>
            </Trigger>
            <Trigger className="pill-item">
              <span className="pill-item-text">Apps</span>
            </Trigger>
            <Transform />
          </div>
        </Content>
      </Wrapper>
    </Page>
  );
};

export default AppointmentSummaryPage;
