import React, { useEffect, useContext } from 'react';

import assessmentContext from '../../assessmentStore';

import {
  Wrapper,
  Trigger,
  Panel
} from '../../components/panel/panelManager.component';

import Icon from '../../components/icon';

import PhysicalSlider from '../../components/impacts/sliders/physical.slider';
import BalanceSlider from '../../components/impacts/sliders/balance.slider';
import SocialSlider from '../../components/impacts/sliders/social.slider';
import DepressionSlider from '../../components/impacts/sliders/depression.slider';
import CognitionSlider from '../../components/impacts/sliders/cognition.slider';

import { calculateImpactsHandler } from '../../functions/calculate';

import './impacts.styles.scss';

const Impacts = ({ questions, highlight }) => {
  const { assessmentDispatch } = useContext(assessmentContext);

  useEffect(() => {
    impactsDispatchHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

  const impactsDispatchHandler = () => {
    const array = calculateImpactsHandler(questions[1], questions[2]);

    dispatchHandler('SET_IMPACTSOFHEARINGLOSS', array);
  };

  const dispatchHandler = (type, data) =>
    assessmentDispatch({ type, payload: data });

  return (
    <>
      <div className="circleText">
        <h1 className="circleText-text">
          Impacts of <br />a Sound Gap
        </h1>
      </div>
      <Wrapper active={null}>
        <div className="impactCircle">
          <Trigger className="impact">
            <div
              className={`impact-wrap ${
                highlight &&
                (questions[1].benefit > 0 || questions[1].benefit < 0)
                  ? 'isActive'
                  : ''
              }`}
            >
              <div className="impact-tile">
                <div className="impact-hd">
                  <Icon
                    name={'brain'}
                    width={'57.71'}
                    height={'49.91'}
                    fill={'#1E9BE9'}
                  />
                </div>
                <div className="impact-bd">
                  <span>
                    Brain Health/ <br /> Cognition
                  </span>
                </div>
              </div>
            </div>
          </Trigger>
          <Trigger className="impact">
            <div
              className={`impact-wrap ${highlight &&
                (questions[1].benefit < 0 ? 'isActive' : '')}`}
            >
              <div className="impact-tile">
                <div className="impact-hd">
                  <Icon
                    name={'active'}
                    width={'58.55'}
                    height={'68.55'}
                    fill={'#1E9BE9'}
                  />
                </div>
                <div className="impact-bd">
                  <span>
                    Physical
                    <br />
                    Health
                  </span>
                </div>
              </div>
            </div>
          </Trigger>
          <Trigger className="impact">
            <div
              className={`impact-wrap ${highlight &&
                (questions[1].benefit > 0 ? 'isActive' : '')}`}
            >
              <div className="impact-tile">
                <div className="impact-hd">
                  <Icon
                    name={'sociable'}
                    width={'51.16'}
                    height={'52.16'}
                    fill={'#1E9BE9'}
                  />
                </div>
                <div className="impact-bd">
                  <span>
                    Social <br /> Engagement
                  </span>
                </div>
              </div>
            </div>
          </Trigger>
          <Trigger className="impact">
            <div
              className={`impact-wrap ${
                highlight &&
                questions[1].benefit > 0 &&
                questions[2].benefit < 0
                  ? 'isActive'
                  : ''
              }`}
            >
              <div className="impact-tile">
                <div className="impact-hd">
                  <Icon
                    name={'depression'}
                    width={'53.92'}
                    height={'53.92'}
                    fill={'#1E9BE9'}
                  />
                </div>
                <div className="impact-bd">
                  <span>
                    Loneliness/
                    <br />
                    Depression
                  </span>
                </div>
              </div>
            </div>
          </Trigger>
          <Trigger className="impact">
            <div
              className={`impact-wrap ${
                highlight &&
                (questions[1].benefit < 0 ||
                  questions[2].answers.some(
                    item => item.text === 'Being at risk of falling'
                  ))
                  ? 'isActive'
                  : ''
              }`}
            >
              <div className="impact-tile">
                <div className="impact-hd">
                  <Icon
                    name={'fall'}
                    width={'53.74'}
                    height={'57.66'}
                    fill={'#1E9BE9'}
                  />
                </div>
                <div className="impact-bd">
                  <span>
                    Balance/
                    <br />
                    Safety
                  </span>
                </div>
              </div>
            </div>
          </Trigger>
        </div>

        <Panel noWrap>
          <div
            className={`impact-modal ${questions[1].benefit > 0 ||
              questions[1].benefit < 0}`}
          >
            <div className="impact-modal-wrap">
              <div className="impactModal">
                <div className="impactModal-hd">
                  <h2 className="impactModal-hd-subTitle">
                    Impacts of hearing loss
                  </h2>
                  <h1 className="impactModal-hd-title">
                    Brain Health/Cognition
                  </h1>
                </div>
                <CognitionSlider />
              </div>
            </div>
          </div>
          <Trigger className="closeModal">
            <i className="fas fa-times" />
          </Trigger>
        </Panel>
        <Panel noWrap>
          <div
            className={`impact-modal ${
              questions[1].benefit < 0 ? 'isActive' : ''
            }`}
          >
            <div className="impact-modal-wrap">
              <div className="impactModal">
                <div className="impactModal-hd">
                  <h2 className="impactModal-hd-subTitle">
                    Impacts of hearing loss
                  </h2>
                  <h1 className="impactModal-hd-title">Physical Health</h1>
                </div>
                <PhysicalSlider />
              </div>
            </div>
          </div>
          <Trigger className="closeModal">
            <i className="fas fa-times" />
          </Trigger>
        </Panel>
        <Panel noWrap>
          <div
            className={`impact-modal ${
              questions[1].benefit > 0 ? 'isActive' : ''
            }`}
          >
            <div className="impact-modal-wrap">
              <div className="impactModal">
                <div className="impactModal-hd">
                  <h2 className="impactModal-hd-subTitle">
                    Impacts of hearing loss
                  </h2>
                  <h1 className="impactModal-hd-title">Social Engagement</h1>
                </div>
                <SocialSlider />
              </div>
            </div>
          </div>
          <Trigger className="closeModal">
            <i className="fas fa-times" />
          </Trigger>
        </Panel>
        <Panel noWrap>
          <div
            className={`impact-modal ${
              questions[1].benefit > 0 && questions[2].benefit < 0
                ? 'isActive'
                : ''
            }`}
          >
            <div className="impact-modal-wrap">
              <div className="impactModal">
                <div className="impactModal-hd">
                  <h2 className="impactModal-hd-subTitle">
                    Impacts of hearing loss
                  </h2>
                  <h1 className="impactModal-hd-title">
                    Loneliness/Depression
                  </h1>
                </div>
                <DepressionSlider />
              </div>
            </div>
          </div>
          <Trigger className="closeModal">
            <i className="fas fa-times" />
          </Trigger>
        </Panel>
        <Panel noWrap>
          <div
            className={`impact-modal ${
              questions[1].benefit < 0 ||
              questions[2].answers.some(
                item => item.text === 'Being at risk of falling'
              )
                ? 'isActive'
                : ''
            }`}
          >
            <div className="impact-modal-wrap">
              <div className="impactModal">
                <div className="impactModal-hd">
                  <h2 className="impactModal-hd-subTitle">
                    Impacts of hearing loss
                  </h2>
                  <h1 className="impactModal-hd-title">Balance/Safety</h1>
                </div>
                <BalanceSlider />
              </div>
            </div>
          </div>
          <Trigger className="closeModal">
            <i className="fas fa-times" />
          </Trigger>
        </Panel>
      </Wrapper>
    </>
  );
};

export default Impacts;
