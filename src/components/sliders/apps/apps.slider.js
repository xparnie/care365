import React, { Component } from 'react';
import Slider from 'react-slick';

import Copy from '../../copy/copy.component';
import Shelf from '../../shelf/shelf.component';
import Heading from '../../heading/heading.component';
import { IsCentered, IsStacked } from '../../layout/layout.component';

import HorizontalList from '../../horizontalList/horizontalList.component';
import HorizontalListItem from '../../horizontalListItem/horizontalListItem.component';

import MobileApps from '../../../pages/Section_2/MobileApps.page';

import '../sliders.styles.scss';

export default class AppsSlider extends Component {
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
            <IsCentered>
              <IsStacked>
                <Shelf>
                  <Heading large blue>
                    <IsCentered>Two Powerful Apps</IsCentered>
                  </Heading>
                </Shelf>
                <IsCentered>
                  <img
                    style={{ maxWidth: '564px' }}
                    className="slide1"
                    src="../images/powerful-apps2.png"
                    alt=""
                  />
                </IsCentered>
              </IsStacked>
            </IsCentered>
          </div>
          <div>
            <>
              <MobileApps />
            </>
          </div>
          <div>
            <IsCentered>
              <IsStacked>
                <Shelf medium>
                  <Heading large blue>
                    <IsCentered>Thrive Care</IsCentered>
                  </Heading>
                  <IsCentered>
                    <Copy>For the people who care about you</Copy>
                  </IsCentered>
                </Shelf>
                <Shelf medium>
                  <HorizontalList>
                    <HorizontalListItem>
                      <IsStacked>
                        <Shelf>
                          <img
                            style={{ width: '210px' }}
                            src="../images/Homescreen-ThriveCare.png"
                            alt="physical health"
                          />
                        </Shelf>
                        <IsCentered>
                          <Copy>Home screen</Copy>
                        </IsCentered>
                      </IsStacked>
                    </HorizontalListItem>
                    <HorizontalListItem>
                      <IsStacked>
                        <Shelf>
                          <img
                            style={{ width: '210px' }}
                            src="../images/Steps-ThriveCare.png"
                            alt="physical health"
                          />
                        </Shelf>
                        <IsCentered>
                          <Copy>Steps</Copy>
                        </IsCentered>
                      </IsStacked>
                    </HorizontalListItem>
                    <HorizontalListItem>
                      <IsStacked>
                        <Shelf>
                          <img
                            style={{ width: '210px' }}
                            src="../images/Use-ThriveCare.png"
                            alt="physical health"
                          />
                        </Shelf>
                        <IsCentered>
                          <Copy>Use</Copy>
                        </IsCentered>
                      </IsStacked>
                    </HorizontalListItem>
                  </HorizontalList>
                </Shelf>
                <Shelf>
                  <IsCentered>
                    <IsStacked>
                      <Shelf>
                        <ul className="mobileAppsFooter-list">
                          <li>
                            <img src="../images/mobile-apps/apple.png" alt="" />
                          </li>
                          <li>
                            <img
                              src="../images/mobile-apps/google.png"
                              alt=""
                            />
                          </li>
                        </ul>
                      </Shelf>
                      <Shelf>
                        <p style={{ textAlign: 'center' }}>
                          <sup>*</sup>Works with the Thrive Hearing Control app.
                          <br />
                          Exclusive to AI hearing aids.
                        </p>
                      </Shelf>
                    </IsStacked>
                  </IsCentered>
                </Shelf>
              </IsStacked>
            </IsCentered>
          </div>
        </Slider>
      </>
    );
  }
}
