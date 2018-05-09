import styled from 'styled-components';

const PanelTitle = styled.h1.attrs({ className: 'panel__title' })`
  font-size: 4vw;
  font-weight: 100;
  margin: 0;
  padding: 0;

  transition: all 400ms;
  &:hover {
    color: pink;
  }
`;

export default PanelTitle;
