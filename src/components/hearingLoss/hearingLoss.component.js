import React, { useContext, useEffect } from 'react';

import assessmentContext from '../../assessmentStore';

import {
  Wrapper,
  useTriggerState,
  Panel
} from '../panel/panelManager.component';

import Shelf from '../shelf/shelf.component';

import './hearingLoss.styles.scss';

const hearingLossData = [
  {
    text: 'Normal',
    src: '/images/hearing-loss-choices/normal.svg',
    alt: 'normal hearing'
  },
  {
    text: 'Mild',
    src: '/images/hearing-loss-choices/mild.png',
    alt: 'mild hearing loss'
  },
  {
    text: 'Mild-High Frequency',
    src: '/images/hearing-loss-choices/mildHighFrequency.png',
    alt: 'mild high hearing loss'
  },
  {
    text: 'Steeply Sloping',
    src: '/images/hearing-loss-choices/steeplySloping.png',
    alt: 'steeply sloping hearing loss'
  },
  {
    text: 'Mild-Moderate',
    src: '/images/hearing-loss-choices/mildModerate.png',
    alt: 'mild moderate hearing loss'
  },
  {
    text: 'Sloping Severe',
    src: '/images/hearing-loss-choices/slopingSevere.png',
    alt: 'sloping severe hearing loss'
  },
  {
    text: 'Moderate',
    src: '/images/hearing-loss-choices/moderate.png',
    alt: 'moderate hearing loss'
  },
  {
    text: 'Moderately Severe',
    src: '/images/hearing-loss-choices/moderatelySevere.png',
    alt: 'moderately severe hearing loss'
  },
  {
    text: 'Profound',
    src: '/images/hearing-loss-choices/profound.png',
    alt: 'profound hearing loss'
  }
];

/**
 * TRIGGER
 */
const Trigger = ({ children }) => {
  const { isActive, onClick, current } = useTriggerState();
  const { assessmentDispatch } = useContext(assessmentContext);

  useEffect(() => {
    assessmentDispatch({
      type: 'SET_HEARINGLOSS_PAGE_CURRENT',
      payload: current
    });

    assessmentDispatch({
      type: 'SET_HEARINGLOSS_PAGE_TEXT',
      payload: hearingLossData[current].text
    });
  }, [current, assessmentDispatch]);

  return (
    <div
      className={`hearingLoss-item ${isActive ? 'isActive' : ''}`}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

/**
 * HEARING LOSS PAGE COMPONENT
 */
const HearingLoss = () => {
  const { assessmentState } = useContext(assessmentContext);

  return (
    <>
      <Wrapper active={assessmentState.hearingLoss.current || 1}>
        <div className="hearingLoss">
          <Shelf xxlarge>
            <div className="hearingLoss-panel">
              <img
                src="/images/hearing-loss-choices/normal.svg"
                alt="Normal hearing"
              />
              {hearingLossData.map(({ src, alt }) => (
                <Panel key={alt}>
                  <img src={src} alt={alt} />
                </Panel>
              ))}
            </div>
          </Shelf>
          <div className="hearingLoss-list">
            {hearingLossData.map(({ text }) => (
              <Trigger key={text}>{text}</Trigger>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HearingLoss;
