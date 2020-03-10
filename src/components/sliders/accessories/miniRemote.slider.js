import React, { Component } from 'react';
import Slider from 'react-slick';

import '../sliders.styles.scss';

export default class MiniRemoteSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      adaptiveHeight: true,
      centerMode: true,
      swipe: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <div className="accessories">
              <img
                className="accessories-img"
                src="../images/sliders/accessories/remote-microphone-plus.png"
                alt="physical health"
              />
            </div>
          </div>
          <div>
            <div className="accessories">
              <img
                className="accessories-img"
                src="../images/sliders/accessories/mini-remote-mic-slide-2.png"
                alt="physical health"
              />
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
