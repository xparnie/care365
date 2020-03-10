import React from 'react';

import styled, { css } from 'styled-components';

const StyledCopy = styled.p`
  font-size: 3.5vmin;

  ${({ xsmall }) =>
    xsmall &&
    css`
      font-size: 2.5vmin;
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: 3vmin;
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: 4vmin;
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: 5vmin;
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

    ${({ left }) =>
      left &&
      css`
        text-align: left;
      `}
`;

const Copy = ({ children, ...props }) => (
  <StyledCopy {...props}>{children}</StyledCopy>
);

export default Copy;
