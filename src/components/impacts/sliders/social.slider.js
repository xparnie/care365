import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SocialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      swipe: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-hd">
                <h1 className="impactSlide-hd-text">
                  <span className="impactSlide-hd-text-bold">
                    Treating your hearing loss can help improve sociability.{' '}
                    <br />
                    Communication may help you live longer.
                  </span>
                </h1>
              </div>
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/social-engagement-slide1-graph.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>
                  Pinker, Susan. (2017).The Secret to Living Longer May Be Your
                  Social Life.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/social-engagement-slide2-icon.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  Hearing aid users reported
                  <span className="impactSlide-hd-text-bold"> significant</span>
                  <br />
                  <span className="impactSlide-hd-text-bold">
                    improvements in their relationships
                  </span>
                  <br />
                  at home, sense of independence,
                  <br />
                  and social and sex life.
                </p>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source:</span>
                  American Academy of Audiology
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
