import React, { Component } from 'react';
import Slider from 'react-slick';

export default class BalanceSlider extends Component {
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
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/balance-slide1.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  People with mild hearing loss [25 dB] are{' '}
                  <span className="impactSlide-hd-text-bold">3 times</span>
                  <br />
                  <span className="impactSlide-hd-text-bold">
                    more likely to have a history of falling
                  </span>
                  . Every
                  <br />
                  additional 10 decibels of hearing loss increases the
                  <br />
                  chances of falling by 1.4 times the original risk.
                </p>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source:</span>
                  Johns Hopkins Medicine
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  Falls are the{' '}
                  <span className="impactSlide-hd-text-bold">
                    leading cause of fatal
                  </span>{' '}
                  <br />
                  <span className="impactSlide-hd-text-bold">injury</span> among
                  older adults.
                </p>
              </div>
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/balance-slide2.svg"
                  alt="physical health"
                />
              </div>

              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source:</span>
                  Faul, M., Xu, L., Wald, M. M., Coronado, V. G. Traumatic brain
                  injury in the United States: Emergency department visits,
                  hospitalizations and deaths 2002-2006. Centers for Disease
                  Control and Prevention, National Center for Injury Prevention
                  and Control; 2010.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  Falling accounts for more than{' '}
                  <span className="impactSlide-hd-text-bold">
                    60% of traumatic
                  </span>
                  <br />
                  <span className="impactSlide-hd-text-bold">
                    brain injuries
                  </span>{' '}
                  in people over 65 years old.
                </p>
              </div>
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/balance-slide3.svg"
                  alt="physical health"
                />
              </div>

              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  <span className="impactSlide-hd-text-bold">
                    Hearing aids with integrated sensors <br />
                    can detect when you fall and send alerts.
                  </span>
                </p>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source:</span>{' '}
                  Faul, M., Xu, L., Wald, M. M., Coronado, V. G. Traumatic brain
                  injury in the United States: Emergency department visits,
                  hospitalizations and deaths 2002-2006. Centers for Disease
                  Control and Prevention, National Center for Injury Prevention
                  and Control; 2010.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
