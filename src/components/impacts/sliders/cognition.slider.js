import React, { Component } from 'react';
import Slider from 'react-slick';

export default class CognitionSlider extends Component {
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
                  src="../images/impacts/cognition-slide1.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  Adults with untreated hearing loss <br />
                  experience a
                  <span className="impactSlide-hd-text-bold">
                    &nbsp;30-40% faster decline
                  </span>
                  <br />
                  <span className="impactSlide-hd-text-bold">
                    in cognitive abilities
                  </span>
                </p>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source:</span>{' '}
                  Lin, F. R., Yaffe, K., Xia, J., Xue, Q., Harris, T. B.,
                  Purchase-Helzner, E., … Simonsick, E. M. (2013). Hearing Loss
                  and Cognitive Decline in Older Adults. JAMA Internal
                  Medicine,173(4), 293-299. doi:10.1001/jamainternmed.2013.1868
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-hd">
                <h1 className="impactSlide-hd-text">
                  <span className="impactSlide-hd-text-bold">
                    Adults with untreated hearing loss are
                    <br />
                    more likely to develop dementia.
                  </span>
                </h1>
              </div>
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/cognition-slide2.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>
                  Johns Hopkins Medicine
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-hd">
                <h1 className="impactSlide-hd-text">
                  <span className="impactSlide-hd-text-bold">
                    Wearing hearing aids can help with brain health.
                  </span>
                </h1>
              </div>
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/cognition-slide3.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-hd">
                <p className="impactSlide-hd-text">
                  Participating in conversations exercises <br />
                  the brain, which prevents atrophy and <br />
                  loss of brain matter.
                </p>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source:</span>{' '}
                  National Institute of Aging
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
