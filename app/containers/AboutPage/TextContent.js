import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const TextContent = styled.div`
  background-color: pink;

  height: 100%;
  width: 100%;

  margin-left: 15px;
  margin-right: 15px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  animation: ${opacityIn()} 1000ms;
`;

export default TextContent;
