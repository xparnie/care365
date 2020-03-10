import React from 'react';

import { Wrapper, Container, Front, Back } from './flipper.styles';

const Flipper = ({ children, flipped }) => (
  <Wrapper>
    <Container flipped={flipped}>
      <Front>{children[0]}</Front>
      <Back>{children[1]}</Back>
    </Container>
  </Wrapper>
);

export default Flipper;
