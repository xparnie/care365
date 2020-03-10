import React from 'react';

import styled, { css } from 'styled-components';

const StyledShelf = styled.div`
  margin-bottom: 1.25vmin;

  ${({ small }) =>
    small &&
    css`
      margin-bottom: 0.5vmin;
    `}

  ${({ medium }) =>
    medium &&
    css`
      margin-bottom: 1.75vmin;
    `}

  ${({ large }) =>
    large &&
    css`
      margin-bottom: 2.75vmin;
    `}

  ${({ xlarge }) =>
    xlarge &&
    css`
      margin-bottom: 5vmin;
    `}
  
  ${({ xxlarge }) =>
    xxlarge &&
    css`
      margin-bottom: 7.5vmin;
    `}
`;

const Shelf = ({ children, ...props }) => (
  <StyledShelf {...props}>{children}</StyledShelf>
);

export default Shelf;
