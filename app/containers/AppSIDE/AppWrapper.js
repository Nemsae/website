import styled from 'styled-components';

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas: 'header content';
  grid-template-columns: 100px 100%;
  grid-template-rows: 100%;

  height: 100vh;
`;

export default AppWrapper;
