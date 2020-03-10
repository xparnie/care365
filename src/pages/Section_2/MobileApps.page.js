import React from 'react';

import Icon from '../../components/icon/';
import Shelf from '../../components/shelf/shelf.component';
import Heading from '../../components/heading/heading.component';
import {
  IsCentered,
  IsStacked
} from '../../components/layout/layout.component';

import '../styles/mobileApps.styles.scss';

const MobileAppsPage = () => (
  <>
    <Shelf>
      <Shelf medium>
        <Heading large blue>
          <IsCentered>Thrive Hearing Control</IsCentered>
        </Heading>
      </Shelf>
      <Shelf>
        <div className="mobileApps">
          <div className="mobileApps-col">
            <ul className="mobileApps-features">
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'adjust'} />
                    </div>
                    <div className="media-bd">
                      <h3>Adjust Volume</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'bodyActivity'} />
                    </div>
                    <div className="media-bd">
                      <h3>Body Activity Tracking</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'stream'} />
                    </div>
                    <div className="media-bd">
                      <h3>Stream Phone Calls & Audio</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'brainHealth'} />
                    </div>
                    <div className="media-bd">
                      <h3>Brain Health Tracking</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'memories'} />
                    </div>
                    <div className="media-bd">
                      <h3>Create Memories</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'fallDetection'} />
                    </div>
                    <div className="media-bd">
                      <h3>Fall Detection and Alerts</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'selfCheck'} />
                    </div>
                    <div className="media-bd">
                      <h3>Self Check</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'transcribe'} />
                    </div>
                    <div className="media-bd">
                      <h3>Transcribe</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'reminders'} />
                    </div>
                    <div className="media-bd">
                      <h3>Reminders</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mobileApps-features-item">
                  <div className="media">
                    <div className="media-img">
                      <Icon name={'thriveAssistant'} />
                    </div>
                    <div className="media-bd">
                      <h3>Thrive Assistant</h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobileApps-col">
            <div className="mobileApps-product">
              <div className="mobileApps-product-img">
                <img src="../images/thriveHearingControl-iphone.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Shelf>
      <IsCentered>
        <IsStacked>
          <Shelf>
            <ul className="mobileAppsFooter-list">
              <li>
                <img src="../images/mobile-apps/apple.png" alt="" />
              </li>
              <li>
                <img src="../images/mobile-apps/google.png" alt="" />
              </li>
            </ul>
          </Shelf>
          <Shelf>
            <p>
              <sup>*</sup>App features vary by hearing aid technology.
            </p>
          </Shelf>
        </IsStacked>
      </IsCentered>
    </Shelf>
  </>
);

export default MobileAppsPage;
