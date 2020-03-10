import React, { useContext, useEffect } from 'react';
import assessmentContext from '../../assessmentStore';

import {
  Wrapper,
  useTriggerState,
  Panel,
  Trigger,
  Transform
} from '../../components/panel/panelManager.component';

import Page from '../../components/page/page.component';
import Progress from '../../components/progress/progress.component';
import HairCell from '../../components/hairCell/hairCell.component';
import Content from '../../components/content/content.component';
import Modal from '../../components/modal/modal.component';
import Shelf from '../../components/shelf/shelf.component';
import Heading from '../../components/heading/heading.component';
import Toggler from '../../components/toggler/toggler.component';
import Icon from '../../components/icon/';

import '../styles/typesOfHearingLoss.styles.scss';
import '../../components/impacts/impacts.styles.scss';

/**
 * Utility Functions
 */

const TriggerPill = ({ children, text }) => {
  const { isActive, onClick, current } = useTriggerState();
  const { assessmentDispatch } = useContext(assessmentContext);

  useEffect(() => {
    assessmentDispatch({
      type: 'SET_TYPESOFHEARINGLOSS_PAGE_CURRENT',
      payload: current
    });
  }, [current, assessmentDispatch]);

  return (
    <div
      className={`pill-item ${isActive ? 'isActive' : ''}`}
      onClick={e => {
        onClick();

        if (text) {
          assessmentDispatch({
            type: 'SET_TYPESOFHEARINGLOSS_PAGE_TEXT',
            payload: text
          });
        }
      }}
    >
      {children}
    </div>
  );
};

/**
 * Page Component
 */
const TypesOfHearingLossPage = ({ current }) => (
  <Page>
    <Content>
      <Shelf xlarge>
        <Heading large blue>
          About Your Hearing
        </Heading>
      </Shelf>

      <Wrapper active={current}>
        <Shelf xlarge>
          <Panel className="TypesOfHearingWrap">
            <div className="earDisplay">
              <div className="earDisplay-hd">
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">Outer Ear</span>
                </div>
                <div className="earDisplay-hd-item earDisplay-hd-item_small">
                  <span className="earDisplay-hd-item-text">Middle Ear</span>
                </div>
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">Inner Ear</span>
                </div>
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">
                    Auditory Nerve Connection
                  </span>
                </div>
              </div>
              <div className="earDisplay-bd">
                <img
                  className="earDisplay-earGraphic"
                  src="../images/hearing-loss-graphic.png"
                  alt=""
                />
                <img
                  className="earDisplay-connection"
                  src="../images/nerveConnection.png"
                  alt=""
                />
                <div className="earDisplay-bd-cover earDisplay-bd-cover_inner" />
                <Wrapper active={null}>
                  <Shelf large>
                    <Panel noWrap>
                      <Modal>
                        <HairCell />
                        <Trigger>
                          <Toggler>
                            <Icon name="plus" />
                          </Toggler>
                        </Trigger>
                      </Modal>
                    </Panel>
                  </Shelf>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '2.5vmin',
                      right: '51.2vmin'
                    }}
                  >
                    <Trigger>
                      <Toggler className="toggler-grey toggler-pulse">
                        <Icon name="plus" />
                      </Toggler>
                    </Trigger>
                  </div>
                </Wrapper>
              </div>
            </div>
          </Panel>
          <Panel className="TypesOfHearingWrap">
            <div className="earDisplay">
              <div className="earDisplay-hd">
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">Outer Ear</span>
                </div>
                <div className="earDisplay-hd-item earDisplay-hd-item_small">
                  <span className="earDisplay-hd-item-text">Middle Ear</span>
                </div>
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">Inner Ear</span>
                </div>
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">
                    Auditory Nerve Connection
                  </span>
                </div>
              </div>
              <div className="earDisplay-bd">
                <img
                  className="earDisplay-earGraphic"
                  src="../images/hearing-loss-graphic.png"
                  alt=""
                />
                <img
                  className="earDisplay-connection"
                  src="../images/nerveConnection.png"
                  alt=""
                />
                <div className="earDisplay-bd-cover earDisplay-bd-cover_outer" />
                <div className="earDisplay-bd-cover earDisplay-bd-cover_middle" />
              </div>
            </div>
          </Panel>
          <Panel className="TypesOfHearingWrap">
            <div className="earDisplay">
              <div className="earDisplay-hd">
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">Outer Ear</span>
                </div>
                <div className="earDisplay-hd-item earDisplay-hd-item_small">
                  <span className="earDisplay-hd-item-text">Middle Ear</span>
                </div>
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">Inner Ear</span>
                </div>
                <div className="earDisplay-hd-item">
                  <span className="earDisplay-hd-item-text">
                    Auditory Nerve Connection
                  </span>
                </div>
              </div>
              <div className="earDisplay-bd">
                <img
                  className="earDisplay-earGraphic"
                  src="../images/hearing-loss-graphic.png"
                  alt=""
                />
                <img
                  className="earDisplay-connection"
                  src="../images/nerveConnection.png"
                  alt=""
                />
                <div className="earDisplay-bd-cover earDisplay-bd-cover_mixed" />
              </div>
            </div>
          </Panel>
        </Shelf>

        <div className="pill pill_with3">
          <TriggerPill text="Sensorineural">
            <span className="pill-item-text">Sensorineural</span>
          </TriggerPill>
          <TriggerPill text="Conductive">
            <span className="pill-item-text">Conductive</span>
          </TriggerPill>
          <TriggerPill text="Mixed">
            <span className="pill-item-text">Mixed</span>
          </TriggerPill>
          <Transform />
        </div>
      </Wrapper>
    </Content>
    {current <= 2 && (
      <Progress goTo={'/impacts-of-hearing-loss'} text={'Select'} />
    )}
  </Page>
);

export default TypesOfHearingLossPage;
