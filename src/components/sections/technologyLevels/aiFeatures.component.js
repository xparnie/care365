import React, { useState, useEffect } from 'react';

import {
  Wrapper,
  Trigger,
  Panel
} from '../../../components/panel/panelManager.component';
import Icon from '../../../components/icon/';
import Shelf from '../../../components/shelf/shelf.component';

import './features.styles.scss';

const AIFeatures = ({ questions }) => {
  const [features, setFeatures] = useState({
    BOT: false,
    BRT: false,
    FD: false,
    TC: false,
    TR: false
  });

  useEffect(() => {
    featureCheckHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const featureCheckHandler = () => {
    const featureSetStateHandle = item => {
      switch (item) {
        case 'BOT':
          return setFeatures(state => ({ ...state, BOT: true }));
        case 'BRT':
          return setFeatures(state => ({ ...state, BRT: true }));
        case 'FD':
          return setFeatures(state => ({ ...state, FD: true }));
        case 'TC':
          return setFeatures(state => ({ ...state, TC: true }));
        case 'TR':
          return setFeatures(state => ({ ...state, TR: true }));
        default:
          return null;
      }
    };

    return questions.map(item =>
      item.answers.map(item => featureSetStateHandle(item.features.ai))
    );
  };

  return (
    <>
      <Shelf xlarge>
        <Wrapper>
          <div className="features-padding">
            <table className="techLevels techLevels_padded">
              <thead>
                <tr>
                  <td />
                  <th id="best" scope="col">
                    <span>Best</span>
                  </th>
                  <th id="better" scope="col">
                    <span>Better</span>
                  </th>
                  <th id="good" scope="col">
                    <span>Good</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={`${features.BOT ? 'techLevels_active' : ''}`}>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      <span>Body Tracking</span>
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className={`${features.BRT ? 'techLevels_active' : ''}`}>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      <span>Brain Tracking</span>
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className={`${features.FD ? 'techLevels_active' : ''}`}>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      <span>Fall Detection and Alerts</span>
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator" />
                  </td>
                  <td>
                    <span className="techLevels-indicator" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      Self Check
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      Reminders
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      Auto On/Off
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className={`${features.TC ? 'techLevels_active' : ''}`}>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      <span>Tap Control</span>
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      Rechargeable
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className={`${features.TR ? 'techLevels_active' : ''}`}>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      <span>Transcribe</span>
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator" />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th className="techLevels-feature">
                    <Trigger className="techLevels-feature-trigger">
                      Thrive Assistant
                    </Trigger>
                  </th>
                  <td>
                    <span className="techLevels-indicator techLevels-indicator_fill" />
                  </td>
                  <td>
                    <span className="techLevels-indicator" />
                  </td>
                  <td>
                    <span className="techLevels-indicator" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="features">
            <div className="featuresWrapper">
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'bodyActivity'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">
                      Body Tracking
                    </span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Tracks your daily steps, measures movement and monitors
                      more vigorous physical activity.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'brainHealth'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">
                      Brain Tracking
                    </span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Monitors the brain-health benefits of wearing hearing aids
                      by tracking active listening.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'fallDetection'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">
                      Fall Detection and Alerts
                    </span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Detects when a hearing aid wearer falls and sends an alert
                      message to selected contacts.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'selfCheck'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">Self Check</span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Provides a quick, convenient way for you to analyze your
                      hearing aid system’s performance.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'reminders'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">Reminders</span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Easily set up reminders for appointments, taking
                      medications, prescription refills or other personal tasks.
                    </p>
                  </div>
                </div>
              </Panel>

              <Panel>
                <div className="features-content">
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">
                      Auto On/Off
                    </span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Automatically and conveniently save battery power when
                      your hearing aids are not in use.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'tap'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">
                      Tap Control
                    </span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Enables you to easily stop or start audio streaming by
                      simply tapping your ear twice.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'transcribe'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">Transcribe</span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Conversations are transcribed into text that can be saved
                      or shared.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'bolt'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">
                      Rechargeable
                    </span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      The smallest Healthable rechargeable hearing aids
                      available, providing up to 24-hour wear.
                    </p>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="features-content">
                  <Shelf medium>
                    <Icon
                      name={'thrive'}
                      width="40"
                      height="40"
                      fill={'#000000'}
                    />
                  </Shelf>
                  <div className="features-content-hd">
                    <span className="features-content-hd-text">
                      Thrive Assistant
                    </span>
                  </div>
                  <div className="features-content-bd">
                    <p className="features-content-bd-text">
                      Provides quick answers to questions like, “how do I adjust
                      volume?” or “what’s the weather?”
                    </p>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </Wrapper>
      </Shelf>
      <Shelf large>
        <p className="features-super">
          <sup>*</sup>Corresponds with lifestyle assessment
        </p>
      </Shelf>
    </>
  );
};

export default AIFeatures;
