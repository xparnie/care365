import React from 'react';

import styled, { css } from 'styled-components';

const StyledIsCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ toLeftMobile }) =>
    toLeftMobile &&
    css`
      @media only screen and (max-width: 768px) {
        justify-content: normal;
      }
    `}
`;

export const IsCentered = ({ children, ...props }) => (
  <StyledIsCentered {...props}>{children}</StyledIsCentered>
);

const StyledIsStacked = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IsStacked = ({ children, ...props }) => (
  <StyledIsStacked {...props}>{children}</StyledIsStacked>
);

const StyledIsSpaced = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IsSpaced = ({ children, ...props }) => (
  <StyledIsSpaced {...props}>{children}</StyledIsSpaced>
);

const StyledIsNarrow = styled.div`
  width: 60%;

  ${({ small }) =>
    small &&
    css`
      width: 50%;
    `}

  ${({ medium }) =>
    medium &&
    css`
      width: 75%;
    `}

  ${({ large }) =>
    large &&
    css`
      width: 90%;
    `}
`;

export const IsNarrow = ({ children, ...props }) => (
  <StyledIsNarrow {...props}>{children}</StyledIsNarrow>
);
