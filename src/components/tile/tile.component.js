import React from 'react';

import { Container, Heading, HeadingIcon, Body } from './tile.styles';

import Icon from '../icon';
import Flipper from '../flipper/flipper.component';

const Tile = ({ text, icon, flipped }) => (
  <Container>
    <Heading>
      <Flipper flipped={flipped}>
        <HeadingIcon>
          <Icon name={icon} fill={'#AAAAAA'} />
        </HeadingIcon>
        <HeadingIcon back>
          <Icon name={icon} fill={'#BDDEF5'} />
        </HeadingIcon>
      </Flipper>
    </Heading>
    <Body flipped={flipped}>
      <p>{text}</p>
    </Body>
  </Container>
);

export default Tile;
