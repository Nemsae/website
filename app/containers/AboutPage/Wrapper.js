import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const Wrapper = styled.div.attrs({ className: 'mx-auto' })`
  ${'' /* background: #f7f7f7;
  color: #fff; */}

  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1280px;

  overflow: auto;

  height: 100%;

  animation: ${opacityIn} 500ms ease-in;

  padding-bottom: 120px;
  padding-top: 120px;
`;

export default Wrapper;
