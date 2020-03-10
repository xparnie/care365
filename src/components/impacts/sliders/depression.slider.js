import React, { Component } from 'react';
import Slider from 'react-slick';

export default class DepressionSlider extends Component {
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
                <img src="../images/impacts/alone.png" alt="physical health" />
              </div>
              <div className="impactSlide-hd">
                <h1 className="impactSlide-hd-text">
                  <span className="impactSlide-hd-text-bold">
                    Loneliness is associated with untreated hearing loss,
                  </span>{' '}
                  <br />
                  and impacts 35% of adults 45 and older
                </h1>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>{' '}
                  Anderson, G. Oscar & Thayer, Colette, E. (2018). <br />
                  For a Future Without Senior Poverty. AARP Foundation.{' '}
                  <a href="https://doi.org/res.00246.001">
                    https://doi.org/res.00246.001
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/hourglass.png"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-hd">
                <h1 className="impactSlide-hd-text">
                  <span className="impactSlide-hd-text-bold">
                    Untreated hearing loss is linked to loneliness,
                  </span>
                  <br />
                  which increases the risk of premature death by 45%
                </h1>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>{' '}
                  Holt-Lunstad J, Smith TB, Layton JB (2010).
                  <br /> Social Relationships and Mortality Risk: A
                  Meta-analytic Review. PLOS Med 7(7): e1000316.{' '}
                  <a href="https://doi.org/10.1371/journal.pmed.1000316">
                    https://doi.org/10.1371/journal.pmed.1000316
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/depression-slide1.svg"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-hd">
                <h1 className="impactSlide-hd-text">
                  Untreated hearing loss can lead to depression, <br />
                  which is associated with an{' '}
                  <span className="impactSlide-hd-text-bold">
                    increased risk of
                  </span>
                  <br />
                  <span className="impactSlide-hd-text-bold">
                    premature death for both men and women.
                  </span>
                </h1>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>{' '}
                  World Health Organization
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="impactSlide">
              <div className="impactSlide-hd">
                <h1 className="impactSlide-hd-text">
                  Untreated hearing loss contributes to{' '}
                  <span className="impactSlide-hd-text-bold">feelings</span>{' '}
                  <br />{' '}
                  <span className="impactSlide-hd-text-bold">of isolation</span>
                  , which can shorten life expectancy.
                </h1>
              </div>
              <div className="impactSlide-img">
                <img
                  src="../images/impacts/rain-cloud.png"
                  alt="physical health"
                />
              </div>
              <div className="impactSlide-hd">
                <h1
                  className="impactSlide-hd-text"
                  style={{ marginTop: '15px' }}
                >
                  <span className="impactSlide-hd-text-bold">
                    Treating hearing loss with hearing aids
                    <br /> will help you stay engaged.
                  </span>
                </h1>
              </div>
              <div className="impactSlide-copy">
                <p className="impactSlide-copy-text">
                  <span className="impactSlide-copy-text-bold">Source: </span>{' '}
                  Johns Hopkins Medicine
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
