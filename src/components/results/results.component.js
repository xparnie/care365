import React, { useEffect, useContext } from 'react';

import AsssessmentError from '../assessmentError/assessmentError.component';
import Checkmark from '../checkmark/checkmark.component';
import Content from '../content/content.component';
import Copy from '../copy/copy.component';
import Heading from '../heading/heading.component';
import Shelf from '../shelf/shelf.component';

import VerticalList from '../verticalList/verticalList.component';
import VerticalListItem from '../verticalListItem/verticalListItem.component';

import HorizontalList from '../horizontalList/horizontalList.component';
import HorizontalListItem from '../horizontalListItem/horizontalListItem.component';

import assessmentContext from '../../assessmentStore';

const Results = ({ completed, questions }) => {
  const { assessmentDispatch } = useContext(assessmentContext);

  useEffect(() => {
    questionController();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchHandler = (type, data) =>
    assessmentDispatch({ type, payload: { data } });

  const questionController = () => {
    const completeCheck = questions.filter(item => item.completed === true);

    completeCheck.length === questions.length
      ? dispatchHandler('SET_ASSESSMENT_COMPLETED', true)
      : dispatchHandler('SET_ASSESSMENT_COMPLETED', false);
  };

  return (
    <>
      {completed ? (
        <>
          <Content>
            <Shelf small>
              <Heading large blue>
                Thank You!
              </Heading>
            </Shelf>
            <Shelf xxlarge>
              <Copy large>Based on your answers, we know that:</Copy>
            </Shelf>
            <Shelf>
              <VerticalList>
                <VerticalListItem>
                  <HorizontalList>
                    <HorizontalListItem>
                      <Checkmark />
                    </HorizontalListItem>
                    <HorizontalListItem>
                      <Copy>
                        You are {questions[0].benefit > 0 ? 'active' : 'quiet'}
                      </Copy>
                    </HorizontalListItem>
                  </HorizontalList>
                </VerticalListItem>
                <VerticalListItem>
                  <HorizontalList>
                    <HorizontalListItem>
                      <Checkmark />
                    </HorizontalListItem>
                    <HorizontalListItem>
                      <Copy>
                        {questions[1].benefit > 0
                          ? 'Enjoy spending time with others'
                          : 'Engaging in healthy activities'}
                      </Copy>
                    </HorizontalListItem>
                  </HorizontalList>
                </VerticalListItem>
                <VerticalListItem>
                  <HorizontalList>
                    <HorizontalListItem>
                      <Checkmark />
                    </HorizontalListItem>
                    <HorizontalListItem>
                      <Copy>
                        Are concerned about staying{' '}
                        {questions[2].benefit > 0
                          ? 'physically active'
                          : 'mentally sharp'}
                      </Copy>
                    </HorizontalListItem>
                  </HorizontalList>
                </VerticalListItem>
                <VerticalListItem>
                  <HorizontalList>
                    <HorizontalListItem>
                      <Checkmark />
                    </HorizontalListItem>
                    <HorizontalListItem>
                      <Copy>
                        Sometimes struggle to hear in certain situations
                      </Copy>
                    </HorizontalListItem>
                  </HorizontalList>
                </VerticalListItem>
              </VerticalList>
            </Shelf>
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

export default Results;
