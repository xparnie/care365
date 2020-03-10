import React from 'react';

import styled, { css } from 'styled-components';

const StyledHeading = styled.h1`
  font-size: 3.5vmin;
  color: #000000;

  ${({ small }) =>
    small &&
    css`
      font-size: 5vmin;
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: 3vmin;
      font-weight: 600;
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: 7vmin;
    `}

  ${({ white }) =>
    white &&
    css`
      color: #ffffff;
    `}

  ${({ blue }) =>
    blue &&
    css`
      color: #1e9be9;
    `}
`;

const Heading = ({ children, ...props }) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};

export default Heading;
