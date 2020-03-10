import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
`;

export const Item = styled.li`
  flex-grow: 1;
  width: 33%;
  padding: 0.5vmin 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:nth-child(-n + 3) {
    margin-bottom: 2.5vmin;
  }
`;
