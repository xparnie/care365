import React, { Component } from 'react';
import Slider from 'react-slick';

import '../sliders.styles.scss';

export default class TableMicSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      adaptiveHeight: true,
      swipe: true,
      centerMode: true,
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
                style={{ marginBottom: '50px' }}
                className="accessories-img"
                src="../images/sliders/accessories/Table-Mic-In-Use.png"
                alt="physical health"
              />
            </div>
          </div>
          <div>
            <div className="accessories">
              <img
                style={{ width: '50%' }}
                className="accessories-img"
                src="../images/sliders/accessories/tableMic.png"
                alt="physical health"
              />
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
