import React, { useContext, useState, useEffect } from 'react';

import assessmentContext from '../../assessmentStore';

import Icon from '../icon';
import { Wrapper, useTriggerState } from '../panel/panelManager.component';
import HorizontalList from '../horizontalList/horizontalList.component';
import HorizontalListItem from '../horizontalListItem/horizontalListItem.component';
import Copy from '../copy/copy.component';
import Shelf from '../shelf/shelf.component';

const frustrationLevelData = [
  {
    text: 'Neutral',
    scale: 1,
    icon: 'neutralFace'
  },
  {
    text: 'Slightly',
    scale: 2,
    icon: 'slightlyFace'
  },
  {
    text: 'Not Good',
    scale: 3,
    icon: 'notGoodFace'
  },
  {
    text: 'Bad',
    scale: 4,
    icon: 'badFace'
  },
  {
    text: 'Very Bad',
    scale: 5,
    icon: 'veryBadFace'
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
      type: 'SET_FRUSTRATIONLEVEL_CURRENT',
      payload: current
    });

    if (frustrationLevelData[current]) {
      assessmentDispatch({
        type: 'SET_FRUSTRATIONLEVEL_TEXT',
        payload: frustrationLevelData[current].text
      });
    }
  }, [current, assessmentDispatch]);

  return (
    <div
      className={`scale ${isActive ? 'isActive' : ''}`}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

const FrustrationLevel = () => {
  const { assessmentState } = useContext(assessmentContext);
  const [active, setActive] = useState(false);

  return (
    <>
      <Wrapper active={assessmentState.frustrationLevel.current || null}>
        <HorizontalList>
          {frustrationLevelData.map(({ text, scale, icon }) => (
            <HorizontalListItem key={text}>
              <div onClick={() => setActive(true)}>
                <Shelf medium>
                  <Trigger>
                    <Icon name={icon} />
                  </Trigger>
                </Shelf>
                <Copy>{scale}</Copy>
              </div>
            </HorizontalListItem>
          ))}
        </HorizontalList>
      </Wrapper>
      {active ? (
        <div style={{ marginTop: '5vmin' }}>
          <Shelf medium>
            <Copy medium>
              How would your loved ones or friends rate that impact?
            </Copy>
          </Shelf>
        </div>
      ) : null}
    </>
  );
};

export default FrustrationLevel;
