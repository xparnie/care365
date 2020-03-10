import React from 'react';

import styled, { css } from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5vw;
  height: 100vh;
  text-align: center;

  ${props =>
    props.small &&
    css`
      justify-content: normal;
      padding: 25vh 25vw 0;
    `}

  ${props =>
    props.flipped &&
    css`
      background-color: #e9f5fd;
    `}

  ${props =>
    props.paddedBottom &&
    css`
      padding-bottom: 25vmin;
    `}

  ${props =>
    props.sliderFix &&
    css`
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;

const Content = ({ children, ...props }) => {
  return <StyledContent {...props}>{children}</StyledContent>;
};

export default Content;
