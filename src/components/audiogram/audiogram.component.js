import React, { useState } from 'react';
import renderHTML from 'react-render-html';

import KebabNav from '../../components/kebabNav/kebabNav.component';
import DotToggle from '../../components/dotToggle/dotToggle.component';
import {
  Wrapper,
  Trigger,
  Panel,
  Transform
} from '../../components/panel/panelManager.component';

import { AUDIOGRAM_DATA as audiogramData } from '../../data/audiogramData';

import Shelf from '../../components/shelf/shelf.component';
import Heading from '../../components/heading/heading.component';

import './audiogram.styles.scss';

const Audiogram = ({ currentHearingLoss }) => {
  // Local Context
  const [lossToggled, setLossToggled] = useState(true);
  const [bananaToggled, setBananaToggled] = useState(false);
  const [iconsToggled, setIconsToggled] = useState(false);
  const [navState, setNavState] = useState(currentHearingLoss);

  const toggleLoss = () => setLossToggled(lossToggled ? false : true);
  const toggleBanana = () => setBananaToggled(bananaToggled ? false : true);
  const toggleIcons = () => setIconsToggled(iconsToggled ? false : true);

  const handleControl = dir => {
    let delta = dir === 'prev' ? -1 : 1;
    let newActive = navState + delta;
    if (newActive < audiogramData.length && newActive >= 0)
      setNavState(newActive);
  };

  return (
    <div className="audiogram">
      <Wrapper>
        <Shelf large>
          <Heading small blue>
            {audiogramData[navState].name}
          </Heading>
        </Shelf>
        <div className="audiogram-switcher">
          <div
            className={`audiogram-control audiogram-control_prev${
              navState === 0 ? ' audiogram-control_disabled' : ''
            }`}
            onClick={() => {
              handleControl('prev');
            }}
          />
          <div className="audiogram-content">
            <Panel noWrap>
              <div className={`audiogram-view audiogram-view_audiogram`}>
                <img
                  src={`/images/audiogram/${audiogramData[navState].slug}/base.jpg`}
                  alt="audiogram base"
                  className={`opaque`}
                />
                <img
                  src={`/images/audiogram/${audiogramData[navState].slug}/banana.jpg`}
                  alt="audiogram with speech spectrum"
                  className={`${bananaToggled ? 'opaque' : ''}`}
                />
                <img
                  src={`/images/audiogram/${audiogramData[navState].slug}/icons.jpg`}
                  alt="audiogram with common sounds"
                  className={`${iconsToggled ? 'opaque' : ''}`}
                />
                <img
                  src={`/images/audiogram/${audiogramData[navState].slug}/full.jpg`}
                  alt="audiogram with common sounds and speech spectrum"
                  className={`${iconsToggled && bananaToggled ? 'opaque' : ''}`}
                />
              </div>
            </Panel>
            <Panel noWrap>
              <div className={`audiogram-view audiogram-view_simulation`}>
                <div className="audiogramTextToggler">
                  <div className="att-container att-container_normal">
                    {renderHTML(audiogramData[0].exampleText)}
                  </div>
                  <div
                    className={`att-container att-container_loss${
                      lossToggled ? '' : ' opaque'
                    }`}
                  >
                    {renderHTML(audiogramData[navState].exampleText)}
                  </div>
                </div>
                <div className="att-toggles" onClick={toggleLoss}>
                  <div className={lossToggled ? 'att-toggles_active' : ''}>
                    Normal Hearing
                  </div>
                  <div className={lossToggled ? '' : 'att-toggles_active'}>
                    Sounds you may be missing
                  </div>
                </div>
              </div>
            </Panel>
          </div>
          <div
            className={`audiogram-control audiogram-control_next${
              navState === audiogramData.length - 1
                ? ' audiogram-control_disabled'
                : ''
            }`}
            onClick={() => {
              handleControl('next');
            }}
          />
        </div>
        <Shelf medium>
          <KebabNav
            num={audiogramData.length}
            active={navState}
            pinned={currentHearingLoss}
          />
        </Shelf>
        <div className="audiogram-toggles">
          <div className="audiogram-toggle" onClick={toggleBanana}>
            <DotToggle toggled={bananaToggled} /> Speech Spectrum
          </div>
          <div className="audiogram-toggle" onClick={toggleIcons}>
            <DotToggle toggled={iconsToggled} /> Common Sounds
          </div>
        </div>

        <div className="pill pill_with2 pill_with2_small">
          <Trigger className="pill-item">
            <span className="pill-item-text">Audiogram</span>
          </Trigger>
          <Trigger className="pill-item">
            <span className="pill-item-text">Simulation</span>
          </Trigger>
          <Transform />
        </div>
      </Wrapper>
    </div>
  );
};

export default Audiogram;
