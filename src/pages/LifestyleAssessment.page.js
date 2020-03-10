import React from 'react';

import Button from '../components/button/button.component';
import Content from '../components/content/content.component';
import Copy from '../components/copy/copy.component';
import Page from '../components/page/page.component';
import Shelf from '../components/shelf/shelf.component';

import Checkmark from '../components/checkmark/checkmark.component';

import VerticalList from '../components/verticalList/verticalList.component';
import VerticalListItem from '../components/verticalListItem/verticalListItem.component';

import HorizontalList from '../components/horizontalList/horizontalList.component';
import HorizontalListItem from '../components/horizontalListItem/horizontalListItem.component';

import { IsCentered } from '../components/layout/layout.component';

import './styles/step1.styles.scss';

const LifestyleAssessment = () => (
  <Page>
    <Content>
      <Shelf xlarge>
        <img className="step1-img" src="../images/step1-banner.jpg" alt="" />
      </Shelf>
      <Shelf xlarge>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <VerticalList>
            <VerticalListItem>
              <IsCentered style={{ width: '100%' }}>
                <Copy medium>Getting to Know You</Copy>
              </IsCentered>
            </VerticalListItem>
            <VerticalListItem>
              <HorizontalList>
                <HorizontalListItem>
                  <Checkmark />
                </HorizontalListItem>
                <HorizontalListItem>
                  <Copy>What brought you in today?</Copy>
                </HorizontalListItem>
              </HorizontalList>
            </VerticalListItem>
            <VerticalListItem>
              <HorizontalList>
                <HorizontalListItem>
                  <Checkmark />
                </HorizontalListItem>
                <HorizontalListItem>
                  <Copy>What are your goals?</Copy>
                </HorizontalListItem>
              </HorizontalList>
            </VerticalListItem>
            <VerticalListItem>
              <HorizontalList>
                <HorizontalListItem>
                  <Checkmark />
                </HorizontalListItem>
                <HorizontalListItem>
                  <Copy>What's happening with your hearing?</Copy>
                </HorizontalListItem>
              </HorizontalList>
            </VerticalListItem>
          </VerticalList>
        </div>
      </Shelf>
      <Shelf>
        <Button link={'/sound-gap'}>Begin</Button>
      </Shelf>
    </Content>
  </Page>
);

export default LifestyleAssessment;
