import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const TextContent = styled.div`
  height: 100%;
  width: 100%;

  margin-left: 15px;
  margin-right: 15px;
  padding: 4rem 8rem;

  overflow: auto;

  animation: ${opacityIn()} 1000ms;
`;

export default TextContent;
