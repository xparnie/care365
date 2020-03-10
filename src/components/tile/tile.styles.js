import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.div`
  margin-bottom: 2.5vmin;
`;

export const HeadingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vmin;
  width: 25vmin;
  max-height: 215px;
  max-width: 215px;
  background-color: #595b60;
  border-radius: 50%;

  ${({ back }) =>
    back &&
    css`
      background-color: #1e9be9;
    `}

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    max-height: 175px;
    max-width: 175px;
  }

  > * {
    height: 50vmin;
    width: 50vmin;
    max-width: 10vmin;
    max-height: 10vmin;

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      max-width: 8vmin;
      max-height: 8vmin;
    }
  }
`;

export const Body = styled.div`
  width: 80%;
  padding: 0 2.5vmin;
  color: #000000;

  ${({ flipped }) =>
    flipped === 1 &&
    css`
      color: #1e9be9;
    `}

  > * {
    font-family: 'DIN Next';
    font-size: 2.25vmin;
    font-weight: bold;
    line-height: 1.2;
    margin: auto;

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 2.5vmin;
    }
  }
`;
