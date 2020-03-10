import React, { Component } from 'react';
import Slider from 'react-slick';

import Shelf from '../../shelf/shelf.component';

export default class FiveTipsSlider extends Component {
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
            <div className="fiveTips">
              <Shelf xlarge>
                <div className="fiveTips-img">
                  <img
                    src="/images/five-tips/slide-1.svg"
                    alt="physical health"
                  />
                </div>
              </Shelf>
              <Shelf xlarge>
                <div className="fiveTips-bd">
                  <p>
                    <span className="fiveTips-bd-bold">
                      Don't get discouraged or give up!
                    </span>{' '}
                    It often <br />
                    takes up to a month to get comfortable <br /> wearing your
                    new hearing aids.
                  </p>
                </div>
              </Shelf>
            </div>
          </div>
          <div>
            <div className="fiveTips">
              <Shelf xlarge>
                <div className="fiveTips-img">
                  <img
                    src="/images/five-tips/slide-2.svg"
                    alt="physical health"
                  />
                </div>
              </Shelf>
              <Shelf xlarge>
                <div className="fiveTips-bd">
                  <p>
                    Hearing aids will not let you hear <br />
                    like you did with normal hearing <br />
                    <span className="fiveTips-bd-bold">
                      but you will hear better.
                    </span>
                  </p>
                </div>
              </Shelf>
            </div>
          </div>
          <div>
            <div className="fiveTips">
              <Shelf xlarge>
                <div className="fiveTips-img">
                  <img
                    src="/images/five-tips/slide-3.svg"
                    alt="physical health"
                  />
                </div>
              </Shelf>
              <Shelf xlarge>
                <div className="fiveTips-bd">
                  <p>
                    At first, your voice may sound strange to <br />
                    you or like you are in a barrel. <br />
                    <span className="fiveTips-bd-bold">
                      In time, it will sound more natural.
                    </span>
                  </p>
                </div>
              </Shelf>
            </div>
          </div>
          <div>
            <div className="fiveTips">
              <Shelf xlarge>
                <div className="fiveTips-img">
                  <img
                    src="/images/five-tips/slide-4.svg"
                    alt="physical health"
                  />
                </div>
              </Shelf>
              <Shelf xlarge>
                <div className="fiveTips-bd">
                  <p>
                    Background noise <br />
                    <span className="fiveTips-bd-bold">is normal.</span>
                  </p>
                </div>
              </Shelf>
            </div>
          </div>
          <div>
            <div className="fiveTips">
              <Shelf xlarge>
                <div className="fiveTips-img">
                  <img
                    src="/images/five-tips/slide-5.svg"
                    alt="physical health"
                  />
                </div>
              </Shelf>
              <Shelf xlarge>
                <div className="fiveTips-bd">
                  <p>
                    <span className="fiveTips-bd-bold">
                      Hearing aid adjustments will likely be needed
                    </span>
                    <br />
                    once or twice during the first month.
                  </p>
                </div>
              </Shelf>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
