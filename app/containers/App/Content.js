import styled from 'styled-components';

const Content = styled.main`
  ${''/* grid-area: content; */}
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
  height: 90%;
  width: 90%;
`;

export default Content;
