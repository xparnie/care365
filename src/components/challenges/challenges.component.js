import React, { useState, useEffect, useContext } from 'react';

import assessmentContext from '../../assessmentStore';

import AsssessmentError from '../assessmentError/assessmentError.component';
import Checkbox from '../checkbox/checkbox.component';
import Content from '../content/content.component';
import Copy from '../copy/copy.component';
import Heading from '../heading/heading.component';
import Shelf from '../shelf/shelf.component';

import './challenges.styles.scss';

const Challenges = ({ completed, challenges, selection }) => {
  const { assessmentDispatch } = useContext(assessmentContext);
  const [swapChallengesHeading, setSwapChallengesHeading] = useState(false);

  const [activeIndex, setActiveIndex] = useState();

  useEffect(() => {
    if (selection.completed === true) {
      setActiveIndex(selection.value);
      setSwapChallengesHeading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchHandler = (type, data) =>
    assessmentDispatch({
      type,
      payload: data
    });

  const resultsData = (index, guid) => {
    setSwapChallengesHeading(true);
    // toggle active class
    setActiveIndex(index);

    dispatchHandler('SET_ASSESSMENT_CHALLENGE_VALUE', index);
    dispatchHandler('SET_ASSESSMENT_CHALLENGE_GUID', guid);
    dispatchHandler('SET_ASSESSMENT_CHALLENGE_COMPLETED', true);
  };

  return (
    <>
      {completed ? (
        <>
          <Content>
            <div className="challengesContent">
              <Shelf small>
                <Heading large blue>
                  Hearing Challenges
                </Heading>
              </Shelf>
              <Shelf xlarge>
                <Copy large>
                  When you struggle to hear in certain situations, <br />
                  which one bothers you the most?
                </Copy>
              </Shelf>
              <div className="challenges-wrap">
                <Shelf xlarge>
                  <ul className="challenges-list interactive-checks">
                    {challenges.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => resultsData(index, item.guid)}
                      >
                        <Checkbox
                          checked={activeIndex === index}
                          id={item.text}
                          text={item.text}
                        />
                        <span className="challenges-list-text">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Shelf>
              </div>
              <div
                className={`challenges-copy challenges-hd-text ${
                  swapChallengesHeading ? 'active fadeit' : ''
                }`}
              >
                <Shelf>
                  <Copy medium>
                    Knowing this, we’d now like to check your hearing
                  </Copy>
                </Shelf>
              </div>
            </div>
          </Content>
        </>
      ) : (
        <Content>
          <AsssessmentError />
        </Content>
      )}
    </>
  );
};

export default Challenges;
