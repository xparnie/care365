import React, { Component } from 'react';
import Slider from 'react-slick';

export default class PhysicalSlider extends Component {
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
                <p className="impactSlide-hd-text">
                  Hearing aids with integrated sensors track physical activity
                  and can <br />
                  help you be more active.
                </p>
              </div>
              <div className="impactSlide-img impactSlide-physical">
                <img
                  src="../images/impacts/physical-health-slide-1.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>
                  2013, Kaiser Permanente "The Gift of Walking"
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  Hearing aids with integrated sensors track physical activity
                  and can <br />
                  help you be more active.
                </p>
              </div>
              <div className="impactSlide-img impactSlide-physical">
                <img
                  src="../images/impacts/physical-health-slide-2.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>
                  2013, Kaiser Permanente "The Gift of Walking"
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  Hearing aids with integrated sensors track physical activity
                  and <br />
                  can help you be more active. Inactive adults increase their
                  risk of:
                </p>
              </div>
              <div className="impactSlide-img impactSlide-physical">
                <img
                  src="../images/impacts/physical-health-slide-3.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>
                  U.S. Department of Health &amp; Human Services <br />
                  <a href="https://www.hhs.gov/fitness/be-active/importance-of-physical-activity/index.html">
                    https://www.hhs.gov/fitness/be-active/importance-of-physical-activity/index.html
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
