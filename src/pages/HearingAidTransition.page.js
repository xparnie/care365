import React from 'react';

import Page from '../components/page/page.component';
import Content from '../components/content/content.component';

import Shelf from '../components/shelf/shelf.component';
import Heading from '../components/heading/heading.component';

import Checkmark from '../components/checkmark/checkmark.component';
import Copy from '../components/copy/copy.component';

import VerticalList from '../components/verticalList/verticalList.component';
import VerticalListItem from '../components/verticalListItem/verticalListItem.component';

import HorizontalList from '../components/horizontalList/horizontalList.component';
import HorizontalListItem from '../components/horizontalListItem/horizontalListItem.component';

import { IsStacked, IsCentered } from '../components/layout/layout.component';

import Progress from '../components/progress/progress.component';

const HearingAidTransition = () => (
  <Page>
    <Content>
      <Shelf xlarge>
        <Shelf medium>
          <Heading large blue>
            Every ear is unique
          </Heading>
        </Shelf>

        <Shelf xlarge>
          <Copy medium>
            Let's determine what hearing aid style is right for you.
          </Copy>
        </Shelf>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HorizontalList className="hList-split">
            <HorizontalListItem>
              <Shelf>
                <IsCentered>
                  <img src="../images/unique.png" alt="" />
                </IsCentered>
              </Shelf>
            </HorizontalListItem>
            <HorizontalListItem>
              <IsStacked>
                <Shelf medium>
                  <Copy small left>
                    A variety of important and unique factors include:
                  </Copy>
                </Shelf>
                <VerticalList>
                  <VerticalListItem>
                    <HorizontalList>
                      <HorizontalListItem>
                        <Checkmark />
                      </HorizontalListItem>
                      <HorizontalListItem>
                        <Copy small>The shape of your ear canal</Copy>
                      </HorizontalListItem>
                    </HorizontalList>
                  </VerticalListItem>
                  <VerticalListItem>
                    <HorizontalList>
                      <HorizontalListItem>
                        <Checkmark />
                      </HorizontalListItem>
                      <HorizontalListItem>
                        <Copy small>Your finger dexterity</Copy>
                      </HorizontalListItem>
                    </HorizontalList>
                  </VerticalListItem>
                  <VerticalListItem>
                    <HorizontalList>
                      <HorizontalListItem>
                        <Checkmark />
                      </HorizontalListItem>
                      <HorizontalListItem>
                        <Copy small>Desired features</Copy>
                      </HorizontalListItem>
                    </HorizontalList>
                  </VerticalListItem>
                  <VerticalListItem>
                    <HorizontalList>
                      <HorizontalListItem>
                        <Checkmark />
                      </HorizontalListItem>
                      <HorizontalListItem>
                        <Copy small>Cosmetic concerns</Copy>
                      </HorizontalListItem>
                    </HorizontalList>
                  </VerticalListItem>
                </VerticalList>
              </IsStacked>
            </HorizontalListItem>
          </HorizontalList>
        </div>
      </Shelf>
    </Content>
    <Progress text="Next" goTo={'/hearing-aid-styles'} />
  </Page>
);

export default HearingAidTransition;
