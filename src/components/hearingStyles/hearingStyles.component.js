import React, { useState, useEffect, useContext } from 'react';
import assessmentContext from '../../assessmentStore';

import { HEARING_STYLES_DATA as stylesData } from '../../data/hearingStylesData';

import './hearingStyles.styles.scss';

const HearingStyles = () => {
  const [activeModel, setActiveModel] = useState(0);
  const [activeStyle, setActiveStyle] = useState(0);
  const [canRotate, setCanRotate] = useState(false);
  const [rotateIndex, setRotateIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const { assessmentState, assessmentDispatch } = useContext(assessmentContext);

  useEffect(() => {
    setCanRotate(
      stylesData.styles[activeStyle].models[activeModel].length > 1
        ? true
        : false
    );

    assessmentDispatch({
      type: 'SET_HEARINGAIDSTYLES_PAGE',
      payload: stylesData.styles[activeStyle].name
    });
  }, [activeModel, assessmentDispatch, activeStyle]);

  function toggleRotate() {
    if (canRotate) {
      setRotateIndex(rotateIndex === 1 ? 0 : 1);
    }
  }

  function toggleZoom() {
    setZoomed(zoomed ? false : true);
  }

  function chooseStyle(i) {
    setZoomed(false);
    setRotateIndex(0);
    setActiveStyle(i);
  }

  function chooseModel(i) {
    setZoomed(false);
    setRotateIndex(0);
    setActiveModel(i);
  }

  return (
    <div className="hearingStyles">
      <div className="hearingStyles-aspectContainer_4x3">
        <h1 className={`hearingStyles-title${zoomed ? ' zoomed' : ''}`}>
          {!zoomed ? 'Hearing Aid Styles' : ''}
        </h1>
        <div className="hearingStyles-modelView">
          <div
            className={`hearingStyles-thumbs hearingStyles-thumbs_styles${
              zoomed ? ' zoomed' : ''
            }`}
          >
            <div className="hearingStyles-thumbs-heading">Style</div>
            <div>
              {stylesData.styleMenu.map((style, index) => {
                return (
                  <div
                    key={index}
                    className={`hearingStyles-thumbContainer${
                      activeStyle === index ? ' active' : ''
                    }`}
                  >
                    <img
                      src={style}
                      alt="thumbnail"
                      className={`hearingStyles-thumb`}
                      onClick={() => {
                        chooseStyle(index);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`hearingStyles-modelContainer${zoomed ? ' zoomed' : ''}`}
          >
            <img
              className={`hearingStyles-model`}
              src={
                stylesData.styles[activeStyle].models[activeModel][rotateIndex]
              }
              alt="hearing aid model"
              onClick={toggleRotate}
            />
          </div>
          <div
            className={`hearingStyles-thumbs hearingStyles-thumbs_models${
              zoomed ? ' zoomed' : ''
            }`}
          >
            <div className="hearingStyles-thumbs-heading">Model</div>
            <div>
              {stylesData.modelMenu.map((model, index) => {
                return (
                  <div
                    key={index}
                    className={`hearingStyles-thumbContainer${
                      activeModel === index ? ' active' : ''
                    }`}
                  >
                    <img
                      src={model}
                      alt="thumbnail"
                      className={`hearingStyles-thumb`}
                      onClick={() => {
                        chooseModel(index);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hearingStyles-zoomIcon" onClick={toggleZoom}>
            <img
              src={`/images/icons/zoom-${zoomed ? 'out' : 'in'}-icon.svg`}
              alt={`zoom`}
            />
          </div>
        </div>
      </div>
      <div className="hearingStyles-header">
        <div className="hearingStyles-header-inner">
          <div className="hearingStyles-hearingAid">
            <img
              src={stylesData.styles[activeStyle].styleImage}
              alt={stylesData.styles[activeStyle].description}
            />
          </div>
          <h2 className="hearingStyles-name">
            {assessmentState.hearingAidStyle}
          </h2>
          <h3 className="hearingStyles-description">
            {stylesData.styles[activeStyle].description}
          </h3>
        </div>
      </div>
      <div className="hearingStyles-shadowHeader" />
    </div>
  );
};

export default HearingStyles;
