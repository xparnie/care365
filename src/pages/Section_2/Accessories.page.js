import React, { useContext } from 'react';

import assessmentContext from '../../assessmentStore';

import {
  Wrapper,
  Trigger,
  Panel
} from '../../components/panel/panelManager.component';

import TVSlider from '../../components/sliders/accessories/tv.slider';
import MiniRemoteSlider from '../../components/sliders/accessories/miniRemote.slider';
import RemoteSlider from '../../components/sliders/accessories/remote.slider';
import TableMicSlider from '../../components/sliders/accessories/tableMic.slider';

import Page from '../../components/page/page.component';
import Progress from '../../components/progress/progress.component';
import Content from '../../components/content/content.component';
import Shelf from '../../components/shelf/shelf.component';
import Heading from '../../components/heading/heading.component';
import Checkbox from '../../components/checkbox/checkbox.component';

const AccessoriesPage = () => {
  const { assessmentState, assessmentDispatch } = useContext(assessmentContext);

  const resultsData = id => {
    if (assessmentState.accessories[id].checked === false) {
      return assessmentDispatch({
        type: 'SET_ACCESSORIES_PAGE_ADD',
        payload: {
          id,
          checked: true
        }
      });
    } else {
      return assessmentDispatch({
        type: 'SET_ACCESSORIES_PAGE_REMOVE',
        payload: {
          id,
          checked: false
        }
      });
    }
  };

  return (
    <Page>
      <Content>
        <Shelf xlarge>
          <Heading large blue>
            Wireless Accessories
          </Heading>
        </Shelf>
        <Wrapper>
          <div className="panels">
            <div className="panels-nav">
              <Trigger></Trigger>
              <Trigger className="accordion">
                <div className="accordion-hd">
                  <Checkbox
                    checked={assessmentState.accessories[0].checked}
                    onClick={() => resultsData(0)}
                    text="TV"
                    id="TV"
                  />
                  <h2 className="accordion-hd-text">TV</h2>
                  <div className="accordion-hd-trigger">
                    <span />
                    <span />
                  </div>
                </div>
                <div className="accordion-bd">
                  Use it to stream audio from your TV or other electronic audio
                  source directly to your hearing aids.
                </div>
              </Trigger>
              <Trigger className="accordion">
                <div className="accordion-hd">
                  <Checkbox
                    checked={assessmentState.accessories[1].checked}
                    onClick={() => resultsData(1)}
                    text="Remote Microphone +"
                    id="RemotePlus"
                  />
                  <h2 className="accordion-hd-text">Remote Microphone +</h2>
                  <div className="accordion-hd-trigger">
                    <span />
                    <span />
                  </div>
                </div>
                <div className="accordion-bd">
                  Enjoy one-on-one conversations in noisy environments and
                  easily stream from a variety of audio sources.
                </div>
              </Trigger>
              <Trigger className="accordion">
                <div className="accordion-hd">
                  <Checkbox
                    checked={assessmentState.accessories[2].checked}
                    onClick={() => resultsData(2)}
                    text="Mini Remote Microphone"
                    id="MiniRemote"
                  />
                  <h2 className="accordion-hd-text">Mini Remote Microphone</h2>
                  <div className="accordion-hd-trigger">
                    <span />
                    <span />
                  </div>
                </div>
                <div className="accordion-bd">
                  Enjoy one-on-one conversations in noisy environments with this
                  small microphone that clips onto the shirt of your
                  conversation partner.
                </div>
              </Trigger>
              <Trigger className="accordion">
                <div className="accordion-hd">
                  <Checkbox
                    checked={assessmentState.accessories[3].checked}
                    onClick={() => resultsData(3)}
                    text="Remote"
                    id="Remote"
                  />
                  <h2 className="accordion-hd-text">Remote</h2>
                  <div className="accordion-hd-trigger">
                    <span />
                    <span />
                  </div>
                </div>
                <div className="accordion-bd">
                  Our remote includes updated features so you can control memory
                  and volume, mute your hearing aids and turn other special
                  features on and off.
                </div>
              </Trigger>
              <Trigger className="accordion">
                <div className="accordion-hd">
                  <Checkbox
                    checked={assessmentState.accessories[4].checked}
                    onClick={() => resultsData(4)}
                    text="Table Mic"
                    id="TableMic"
                  />
                  <h2 className="accordion-hd-text">Table Microphone</h2>
                  <div className="accordion-hd-trigger">
                    <span />
                    <span />
                  </div>
                </div>
                <div className="accordion-bd">
                  Designed for group settings like meetings, family gatherings
                  or noisy restaurant environments. Utilizing eight built-in
                  microphones, it will determine the primary speaker's voice and
                  stream it directly to your hearing aids.
                </div>
              </Trigger>
            </div>

            <div className="panels-panels">
              <Panel>
                <div className="accessories">
                  <img
                    className="accessories-img"
                    src="../images/family.png"
                    alt="Complete lineup of remotes"
                  />
                </div>
              </Panel>
              <Panel>
                <TVSlider />
              </Panel>
              <Panel>
                <MiniRemoteSlider />
              </Panel>
              <Panel>
                <div className="accessories">
                  <img
                    className="accessories-img"
                    src="../images/sliders/accessories/mini-remote-mic-slide-1.png"
                    alt="physical health"
                  />
                </div>
              </Panel>
              <Panel>
                <RemoteSlider />
              </Panel>
              <Panel>
                <TableMicSlider />
              </Panel>
            </div>
          </div>
        </Wrapper>
      </Content>
      <Progress goTo={'/appointment-summary'} active={0} />
    </Page>
  );
};

export default AccessoriesPage;
