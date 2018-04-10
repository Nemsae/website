import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const Wrapper = styled.div`
  ${'' /* background: #f7f7f7;
  color: #fff; */}

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;

  height: 100%;

  animation: ${opacityIn} 500ms ease-in;

  ${'' /* overflow: auto;

  padding-left: 80px;
  padding-right: 80px; */}
`;

export default Wrapper;
