import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;

  height: 100%;

  animation: ${opacityIn} 500ms ease-in;
`;

export default Wrapper;
