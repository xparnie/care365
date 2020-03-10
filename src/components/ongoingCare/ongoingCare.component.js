import React from 'react';

import Shelf from '../shelf/shelf.component';
import Heading from '../heading/heading.component';

import Checkmark from '../checkmark/checkmark.component';
import Copy from '../copy/copy.component';

import VerticalList from '../verticalList/verticalList.component';
import VerticalListItem from '../verticalListItem/verticalListItem.component';

import HorizontalList from '../horizontalList/horizontalList.component';
import HorizontalListItem from '../horizontalListItem/horizontalListItem.component';

const OngoingCare = () => (
  <>
    <Shelf xlarge>
      <Shelf xlarge>
        <Heading large blue>
          Care Experience
        </Heading>
      </Shelf>

      <Shelf xlarge>
        <div style={{ maxWidth: '60%', margin: 'auto' }}>
          <img src="../images/ongoingCare.png" alt="" />
        </div>
      </Shelf>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <VerticalList>
          <VerticalListItem>
            <HorizontalList>
              <HorizontalListItem>
                <Checkmark />
              </HorizontalListItem>
              <HorizontalListItem>
                <Copy small>Fitting Support</Copy>
              </HorizontalListItem>
            </HorizontalList>
          </VerticalListItem>
          <VerticalListItem>
            <HorizontalList>
              <HorizontalListItem>
                <Checkmark />
              </HorizontalListItem>
              <HorizontalListItem>
                <Copy small>Follow-Up Service</Copy>
              </HorizontalListItem>
            </HorizontalList>
          </VerticalListItem>
          <VerticalListItem>
            <HorizontalList>
              <HorizontalListItem>
                <Checkmark />
              </HorizontalListItem>
              <HorizontalListItem>
                <Copy small>Warranty</Copy>
              </HorizontalListItem>
            </HorizontalList>
          </VerticalListItem>
          <VerticalListItem>
            <HorizontalList>
              <HorizontalListItem>
                <Checkmark />
              </HorizontalListItem>
              <HorizontalListItem>
                <Copy small>Office Visits</Copy>
              </HorizontalListItem>
            </HorizontalList>
          </VerticalListItem>
        </VerticalList>
      </div>
    </Shelf>
  </>
);

export default OngoingCare;
