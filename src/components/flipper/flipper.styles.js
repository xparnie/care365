import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  perspective: 300px;
`;

export const Container = styled.div`
  transition: all 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-style: preserve-3d;
  will-change: transform;

  ${({ flipped }) =>
    flipped === 1 &&
    css`
      transform: rotateY(180deg) translateZ(5px);
      transform-style: preserve-3d;
      will-change: transform;
    `}

  ${({ flipped }) =>
    flipped === 1 &&
    css`
      > *:first-child {
        z-index: -1;
      }

      > *:last-child {
        z-index: 1;
      }
    `}
`;

export const Front = styled.div`
  transform: rotateY(0deg) translateZ(5px);
`;

export const Back = styled.div`
  position: absolute;
  top: 0;
  transform: rotateY(180deg) translateZ(5px);
  z-index: -1;
`;
