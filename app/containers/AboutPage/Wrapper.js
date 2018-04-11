import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const Wrapper = styled.div.attrs({ className: 'mx-auto' })`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1200px;

  height: 100%;

  animation: ${opacityIn} 500ms ease-in;

  padding-bottom: 120px;
  padding-top: 120px;
`;

export default Wrapper;
