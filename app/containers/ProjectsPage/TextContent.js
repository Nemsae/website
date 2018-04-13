import styled from 'styled-components';

import { opacityIn } from 'utils/keyFrames';

const TextContent = styled.div`
  height: 100%;
  width: 100%;

  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 6rem 8rem;

  overflow: auto;

  ${'' /* animation: ${opacityIn()} 1000ms 1200ms; */}
`;

export default TextContent;
